function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    // return sum; 
    console.log(sum);
}
add(45, 65)
console.log('total', add);

function bringSingara(money) {
    var singraPrice = 10;
    var quantity = money / singraPrice;
    return quantity;
}
var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log('Eating singra', singaras);