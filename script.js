let list = document.querySelector('.list')

let dataInput = prompt('введи штрихи')

function splitMulti(str, tokens) {
    var tempChar = tokens[0]; // We can use the first token as a temporary join character
    for (var i = 1; i < tokens.length; i++) {
        str = str.split(tokens[i]).join(tempChar);
    }
    str = str.split(tempChar);
    return str;
}

let barcodeArr = splitMulti(dataInput, ['\r\n', ' '])

console.log(dataInput)
console.log(barcodeArr)

function createList(arr) {
    list.innerHTML = ''
    arr.forEach(element => {
        console.log(element);
        list.innerHTML += `<li class="">${element}</li>`
    });
}

createList(barcodeArr)