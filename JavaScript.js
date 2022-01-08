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

// const Karra = (a) => {
//     return (b) => {
//         console.log(`${a} x ${b} = ${a * b}`)
//     }
// }

// for (i = 1; i <= 9; i++) {
//     for (j = 1; j <= 10; j++) {
//         Karra(i)(j)

//     }
//     console.log(`=========================`)
// };



// Function finding how many the same letter in object name and status 
const data = [
    { id: 1, name: 'Anvarxon', status: 'Student' },
    { id: 2, name: 'Qodirxon', status: 'Mentor' },
    { id: 3, name: 'Abdulahad', status: 'Jurnalist' },
    { id: 4, name: 'Arofat', status: 'Teacher' },
]

const aFind = (letter) => {
    let count = 0;
    for (i = 0; i < data.length; i++) {

        for (j = 0; j < data[i].name.length; j++) {
            (data[i].name.toLowerCase()[j] == letter || data[i].status.toLowerCase()[j] == letter) && (count++)
        }
    }
    return count;
}

console.log(aFind('t'))
























