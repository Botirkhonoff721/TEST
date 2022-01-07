// 1-method for solution of karra //
// const Karra = () => {
//     for (i = 1; i <= 10; i++) {
//         for (j = 1; j <= 10; j++) {
//             console.log(`${i} x ${j} = ${i * j}`)
//         }
//         console.log(`=============================`)
//     }
// }

// Karra()

// 2-method for solution of karra //

// const Karra = (first) => {
//     return (second) => {
//         console.log(`${first} x ${second} = ${first * second}`)
//     }
// }

// Karra(5)(6)

// 3-method for solution of karra
// const Karra = (first) => {

//     for (i = 1; i <= 10; i++) {
//         console.log(`${first} x ${i} = ${first * i}`)
//     }
// }
// Karra(5)

// 4-method for solution of karra ((((((((OPTIMAl Solution))))))))
const Karra = (a) => {
    return (b) => {
        console.log(`${a} x ${b} = ${a * b}`)
    }
}

for (i = 1; i <= 9; i++) {
    for (j = 1; j <= 10; j++) {
        Karra(i)(j)

    }
    console.log(`=========================`)
}