let mun3 = [2, 3, 5, 7, 10, 11, 13]
let tong = 0
for ( let i=0 ; i<mun3.length ; i++) {
    let flog = true
    for (let j = 0; j < mun3[i]; j++) {
        if (mun3[i] % j === 0) {
            flog = false
            break
            console.log(mun[i])
        } else {
            flog = true

        }

    }
    tong += mun3[i]
    // console.log("tống số nguyên tố là: " + tong)
}