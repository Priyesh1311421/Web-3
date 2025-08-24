// Asymmetric encryption, also known as public-key cryptography, is a type of encryption that 
// uses a pair of keys: a public key and a private key. The keys are mathematically related, but it 
// is computationally infeasible to derive the 
// private key from the 
// public key .
//  Public Key: The public key is a string that can be shared openly
//  Private Key: The private key is a secret cryptographic code that must be kept confidential. It is 
// used to decrypt data encrypted with the corresponding public key or to create digital 
// signatures.
// Common Asymmetric Encryption Alogritms :->
//     - RSA(Rives Shamir Adleman)
//     - ECC(Elliptic Curve Cryptography)
//     - EdDSA (Edwards-curve Digital Signature Algorithm )



// Using EdDSA - ED25519 (@noble/ed25519)

import * as ed from '@noble/ed25519';

async function main(){
    const privateKey = ed.utils.randomPrivateKey();

    const message = new TextEncoder().encode("hello World");

    const publicKey = await ed.getPublicKeyAsync(privateKey);

    const Signature = await ed.signAsync(message, privateKey);

    const isValid = await ed.verifyAsync(Signature, message, publicKey);

    console.log(isValid);
}

main();



