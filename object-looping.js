var shopingCard = {
    book: 3,
    pen: 5,
    keybord: 1,
    mouse: 10,
    sunglass: 17,
    shoes: 2
}
const keys = Object.keys(shopingCard);
console.log(keys);
const values = Object.values(shopingCard);
console.log(values);

    for(var i = 0; i < keys.length; i++){

        var propertyName = keys[i];
        var propertyValue = shopingCard[propertyName];
        console.log(propertyName, propertyValue);
    }

    // for in loop is way

    for(var propertyName in shopingCard){
        const values = shopingCard[propertyName];
        console.log(propertyName, values);
    }