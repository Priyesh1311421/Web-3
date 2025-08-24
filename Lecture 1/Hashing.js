const crypto = require('crypto');
const input = '100xdevs'
const hash = crypto.createHash('sha256').update(input).digest('hex');
console.log(hash);

// SHA-256 (Secure Hash Algorithm 256-bit) explanation:
// - The '256' refers to the output size of 256 bits (32 bytes)
// - SHA-256 always produces a fixed-length hash of exactly 256 bits
// - Regardless of input size, output is always 64 hexadecimal characters
// - This is a one-way cryptographic hash function (irreversible)
// - Same input will always produce the same hash output
// - Even tiny changes in input result in completely different hash
// - Commonly used for data integrity verification and password hashing


//Properties of Hashing 
// - Deterministic
// - Fast computation 
// - Pre-Image Resistance
// - Collision Resistance
