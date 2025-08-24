// Symmetric Encryption is a method of encryption where the same key is used for both encryption and decrytion.

const crypto = require('crypto');

// Generate a random encryption key

const key = crypto.randomBytes(32); // random 32 bytes key => meaning it has 256 bits;
const iv = crypto.randomBytes(16); // random 16 bytes string which intializes vector IV

// function to encrypt the text

function encrypt(plaintext){
    cipertext = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipertext.update(plaintext, 'utf8', 'hex');
    encrypted += cipertext.final('hex');
    return encrypted;
}

function decrypt(encryptedText){
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedText, 'hex','utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}


const textToEncrypt = "hello gs";
const encryptedText = encrypt(textToEncrypt);
const decryptedText = decrypt(encryptedText);

console.log('Original Text: ',textToEncrypt);
console.log('Encrupted Text: '+ encryptedText);
console.log('Decrypted Text: '+ decryptedText);

// Steps
// Create a key of the appropriate length
// Create a implementaion vector iv
// Create the encryption and decryption function