import {Keypair} from '@solana/web3.js';
import nacl from 'tweetnacl';

const keyPair = Keypair.generate();

const publicKey = keyPair.publicKey.toString();
const privateKey = keyPair.secretKey;

console.log('Public Key: '+ publicKey);
console.log('Private Key(secret key): '+ privateKey);

const message = new TextEncoder().encode('hello world!');

const signature = nacl.sign.detached(message, privateKey);

const result = nacl.sign.detached.verify(
    message,
    signature,
    keyPair.publicKey.toBytes()
);

console.log(result);