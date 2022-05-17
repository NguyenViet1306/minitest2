let num3 = [2, 3, 5, 7, 10, 11, 13]
let tong = 0
for ( let i=0 ; i<num3.length ; i++) {
    let flog = true
    for (let j = 2; j < Math.sqrt(num3[i]); j++) {
        if (num3[i] % j === 0) {
            flog = false
            break
        }
    }
        if (flog) {
            tong += num3[i]
            }
    console.log("tống số nguyên tố là: " + tong)
}