const hubspot = require('../../../../..')
const _ = require('lodash')
const Promise = require('bluebird')

const hubspotClient = new hubspot.Client({ apiKey: process.env.HUBSPOT_API_KEY })
const COMPANIES_TO_CREATE = [
    {
        properties: {
            address: 'test address 01',
            annualrevenue: 10000,
            city: 'test city 01',
            country: 'test country 01',
            description: 'Company created for test',
            domain: 'companies.sample.test.com1',
            founded_year: '2020',
            name: 'Company created for test companies-sample 01',
        },
    },
    {
        properties: {
            address: 'test address 02',
            annualrevenue: 20000,
            city: 'test city 02',
            country: 'test country 02',
            description: 'Company created for test',
            domain: 'companies.sample.test.com2',
            founded_year: '2020',
            name: 'Company created for test companies-sample 02',
        },
    },
]
const CONTACTS_TO_CREATE = [
    {
        properties: {
            address: 'test address 01',
            email: 'companies.sample.test.01@hubspot.com',
            city: 'test city 01',
            country: 'test country 01',
            firstname: 'Contact created for test companies-sample',
            lastname: '01',
        },
    },
    {
        properties: {
            address: 'test address 02',
            email: 'companies.sample.test.02@hubspot.com',
            city: 'test city 02',
            country: 'test country 02',
            firstname: 'Contact created for test companies-sample',
            lastname: '02',
        },
    },
]
const CONTACT_OBJECT_TYPE = 'contacts'
const COMPANY_OBJECT_TYPE = 'companies'
const COMPANY_TO_CONTACT_ASSOCIATION_TYPE = 'company_to_contact'

const getObjectsIdsCreatedForTests = async (objectType, query) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const searchBody = {
        filterGroups: [],
        sorts: [],
        limit: 30,
        after: 0,
        properties: [],
        query,
    }
    const searchFn = _.get(hubspotClient, `crm.${objectType}.searchApi`)
    const searchResult = await searchFn.doSearch(searchBody)
    return _.map(searchResult.body.results, (company) => {
        return { id: company.id }
    })
}

const createAssociation = async (companyId, contactId) => {
    await hubspotClient.crm.companies.associationsApi.create(
        companyId,
        CONTACT_OBJECT_TYPE,
        contactId,
        COMPANY_TO_CONTACT_ASSOCIATION_TYPE,
    )
}

const restoreEnvironment = async () => {
    console.log('Archiving companies created for tests')
    const companiesIdsToArchive = await getObjectsIdsCreatedForTests(
        COMPANY_OBJECT_TYPE,
        COMPANIES_TO_CREATE[0].properties.description,
    )
    await hubspotClient.crm.companies.batchApi.archive({ inputs: companiesIdsToArchive })

    console.log('Archiving contacts created for tests')
    const contactsIdsToArchive = await getObjectsIdsCreatedForTests(
        CONTACT_OBJECT_TYPE,
        CONTACTS_TO_CREATE[0].properties.firstname,
    )
    await hubspotClient.crm.contacts.batchApi.archive({ inputs: contactsIdsToArchive })
}

exports.initializeEnvironment = async () => {
    await restoreEnvironment()

    console.log('Creating contacts for tests')
    const createContactsResponse = await hubspotClient.crm.contacts.batchApi.create({
        inputs: CONTACTS_TO_CREATE,
    })

    console.log('Creating companies for tests')
    const createCompaniesResponse = await hubspotClient.crm.companies.batchApi.create({
        inputs: COMPANIES_TO_CREATE,
    })

    console.log(
        `Creating association between company [${COMPANIES_TO_CREATE[0].properties.name}] and contact [${CONTACTS_TO_CREATE[0].properties.email}]`,
    )

    const companyId = _.chain(createCompaniesResponse.body.results)
        .find({ properties: { name: COMPANIES_TO_CREATE[0].properties.name } })
        .get('id')
        .value()

    const contactId = _.chain(createContactsResponse.body.results)
        .find({ properties: { lastname: CONTACTS_TO_CREATE[0].properties.lastname } })
        .get('id')
        .value()

    await createAssociation(companyId, contactId)
}

exports.restoreEnvironment = restoreEnvironment

exports.createdContacts = CONTACTS_TO_CREATE
exports.createdCompanies = COMPANIES_TO_CREATE
