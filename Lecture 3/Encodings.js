// let bytes = new Uint8Array([202,244,1,23]);
// console.log(bytes);
// bytes[3] = 300;
// console.log(bytes);


// function bytesToAscii(byteArray) {
//     return byteArray.map(byte => String.fromCharCode(byte)).join('');
// }

// // Example usage:
// const bytes = [72, 101, 108, 108, 111]; // Corresponds to "Hello"
// const asciiString = bytesToAscii(bytes);
// console.log(asciiString); // Output: "Hello


// function asciiToBytes(asciiString) {
//     const byteArray = [];
//     for (let i = 0; i < asciiString.length; i++) {
//         byteArray.push(asciiString.charCodeAt(i));
//     }
//     return byteArray;
// }

// // Example usage:
// const ascii = "Hello";
// const byteArray = asciiToBytes(ascii);
// console.log(byteArray); // Output: [72, 101, 108, 108, 111]


// function bytesToAscii(byteArray) {
//     return new TextDecoder().decode(byteArray);
// }
// // Example usage:
// const bytes = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
// const asciiString = bytesToAscii(bytes);
// console.log(asciiString); // Output: "Hello"

// function asciiToBytes(asciiString) {
//     return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
// }

// // Example usage:
// const ascii = "Hello";
// const byteArray = asciiToBytes(ascii);
// console.log(byteArray);


// function arrayToHex(byteArray) {
//     let hexString = '';
//     for (let i = 0; i < byteArray.length; i++) {
//         hexString += byteArray[i].toString(16).padStart(2, '0');
//     }
//     return hexString;
// }

// // Example usage:
// const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
// const hexString = arrayToHex(byteArray);
// console.log(hexString); // Output: "48656c6c6f



// function hexToArray(hexString) {
//     const byteArray = new Uint8Array(hexString.length / 2);
//     for (let i = 0; i < byteArray.length; i++) {
//         byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
//     }
//     return byteArray;
// }

// // Example usage:
// const hex = "48656c6c6f";
// const byteArrayFromHex = hexToArray(hex);
// console.log(byteArrayFromHex); // Output: Uint8Array(5) [72, 101, 108, 108, 1


// const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
// const base64Encoded = Buffer.from(uint8Array).toString("base64");
// console.log(base64Encoded)

// const bs58 = require('bs58');
// function uint8ArrayToBase58(uint8Array) {
//     return bs58.encode(uint8Array);
// }
// // Example usage:
// const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
// const base58String = uint8ArrayToBase58(byteArray);
// console.log(base58String); // Output: Base58 encoded string

const bs58 = require('bs58');
function base58ToUint8Array(base58String) {
    return bs58.decode(base58String);
}

