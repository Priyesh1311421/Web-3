/**
 * Proof of Work implementation that finds a nonce value to generate a hash starting with five zeros.
 * This demonstrates the basic concept used in blockchain mining where miners search for a nonce
 * (number used once) that, when combined with the data, produces a hash meeting specific criteria.
 * 
 * The algorithm:
 * 1. Takes a base string "100xdevs" and appends an incrementing number (nonce)
 * 2. Creates SHA-256 hash of the combined string
 * 3. Checks if the hash starts with "00000" (5 leading zeros)
 * 4. If not found, increments the nonce and tries again
 * 5. When found, outputs the successful hash and corresponding nonce
 * 
 * @description A nonce (number used once) is a random or incrementing number that is used
 * in cryptographic operations to ensure uniqueness and satisfy proof-of-work requirements.
 * In this context, it's the variable number appended to "100xdevs" until we find a hash
 * that meets our difficulty requirement (starting with 5 zeros).
 */
const crypto = require('crypto');

let notFound = true;
let i = 1;

while(notFound){
    const hash = crypto.createHash('sha256').update('100xdevs'+i.toString()).digest('hex');
    if(hash.startsWith('00000')){
        notFound = false;
        console.log(`The hash which starts with 00000 is : ${hash} for the input 100xdevs${i}` );
    }
    i++;
}