let Grocery_1;
let Grocery_2;
let Grocery_3;

function groceryTracker() {
    Grocery_1 = parseFloat(document.getElementById('Grocery_1').value);
    Grocery_2 = parseFloat(document.getElementById('Grocery_2').value);
    Grocery_3 = parseFloat(document.getElementById('Grocery_3').value);

 let total = Grocery_1+Grocery_2+Grocery_3;
 document.getElementById('result').innerText = `The area of the rectangle is: $ ${total}`;
}