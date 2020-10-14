console.log('Hello World 123!');
let name='Hi';
console.log(name);
//case sentitive (low + cap)
let firstName='X'; // string literal
let lastName='Z';
let person = {
    name: 'X',
    age: null

};
let selection ='name'
person[selection]='Mary'
console.log(person);

let selectedColor=['red','blue'];

function writeConsole(name) {
    console.log('Hello '+ name);
}

function squre(number){
    return number * number
}

let number=squre(3)
 
writeConsole(squre(4))



// MTD account
// $.ajax({
//     url: "https://myhirehop.com/modules/stock/stock_export.php?id=2471&key=65oqeq889pqh&depot=1&cat=0&sidx=TITLE&sord=asc",
//     dataType: "jsonp",
//     success: function( data ) {
//         console.log( data );
//     }
// });


//MTDDevp account
$.ajax({
    url: "https://myhirehop.com/modules/stock/stock_export.php?id=2606&key=ieeb05zyel76&depot=1&cat=0&sidx=TITLE&sord=asc",
    dataType: "jsonp",
    success: function( data ) {
        console.log( data );
    }
});



writeConsole(squre(3))
