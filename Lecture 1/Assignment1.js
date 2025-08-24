// const crypto = require('crypto');

// let notFound = true;
// let i = 1;

// while(notFound){
//     const hash = crypto.createHash('sha256').update(i.toString()).digest('hex');
//     if(hash.startsWith('00000')){
//         notFound = false;
//         console.log(`The hash which starts with 00000 is : ${hash} for the number ${i}` );
//     }
//     i++;
// }

const crypto = require('crypto');

let notFound = true;
let i = 1;

while(notFound){
    const hash = crypto.createHash('sha256').update(i.toString()).digest('hex');
    if(hash.startsWith('000000000')){
        notFound = false;
        console.log(`The hash which starts with 000000000 is : ${hash} for the number ${i}` );
    }
    i++;
}