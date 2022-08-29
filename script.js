let list = document.querySelector('.list')
let barcodesStr = prompt('введи штрихи')
let form = document.querySelector('.form')
let inputData = form.querySelector('.inputBarcod')

function splitMulti(str, tokens) {
    var tempChar = tokens[0]; // We can use the first token as a temporary join character
    for (var i = 1; i < tokens.length; i++) {
        str = str.split(tokens[i]).join(tempChar);
    }
    str = str.split(tempChar);
    return str;
}

let barcodeArr = splitMulti(barcodesStr, ['\r\n', ' '])
let barcodeClearArr = []



function clearArr(arr) {   
    arr.forEach((element) => {
        if (element.length == 13){
            barcodeClearArr.push(element)
        }
    })
}

function createList(arr) {
    list.innerHTML = ''
    arr.forEach(element => {
        // console.log(element);
        list.innerHTML += `<li class="">${element}</li>`
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let barcode = inputData.value

    // if (barcode.length == 3){
    //     console.log()
    // }

    // console.log(barcode)
})




clearArr(barcodeArr)
createList(barcodeClearArr)