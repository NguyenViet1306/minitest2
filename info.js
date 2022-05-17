let array
function creatArray() {
    let n = +prompt("Nhập vào số phần tử của mảng: ")
    array = new Array(n)
    for (let i = 0; i < array.length; i++) {
        array[i] = prompt("Nhập vào phần tử thứ " + (i+1))
    }
}
function songuyento() {
    let sum = 0
    for ( let i=0 ; i<500 ; i++ ) {
        let flag = true
        for ( let j=2 ; j<Math.sqrt(i); j++) {
            if (i%j===0) {
                flag = false
                break
            }
        }
        if (flag) {
            sum += i
        }
        console.log(sum)
    }
}