const crypto = require('crypto');

class Transaction{
    constructor(fromAdress, toAdress, amount){
        this.fromAdress = fromAdress;
        this.toAdress = toAdress;
        this.amount = amount;
    }

    
}
class Block{
    constructor(timestamp, transactions, previousHash = ''){
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        const hash =  crypto.createHash('sha256').update(this.previousHash+ this.timestamp+ JSON.stringify(this.transactions)+ this.nonce).digest('hex');
        return hash.toString();
    }

    mineBlock(difficulty){
        while(this.hash.substring(0,difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log(this.hash);
    }
}


class BlockChain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 6;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock(){
        return new Block("01/01/2025",[],"0");
    }


    getLatestBlock(){
        return this.chain[this.chain.length -1];
    }

    minePendingTransaction(miningRewardAddress){
        let block = new Block(Date.now(), this.pendingTransactions,this.getLatestBlock().hash);
        block.mineBlock(this.difficulty);

        console.log('Block successfully mined');
        this.chain.push(block);
        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress , this.miningReward)
        ];
    }

    createTransaction(transaction){
        this.pendingTransactions.push(transaction);
    }


    getBalanceofAddress(address){
        let balance = 0;
        for(const block of this.chain){
            for(const trans of block.transactions){
                if(trans.fromAdress == address){
                    balance -= trans.amount;
                }
                if(trans.toAdress == address){
                    balance += trans.amount;
                }
            }
        }
        return balance;
    }

    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i-1];

            if(currentBlock.hash != currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash != prevBlock.hash){
                return false;
            }
        }

        return true;
    }
}


let savjeeCoin = new BlockChain();

// console.log("Mining block 1....");
// savjeeCoin.addBlock(new Block(1,"10/02/2025",{amount: '10'}))

// console.log("Mining block 2....")
// savjeeCoin.addBlock(new Block (2,"11/02/2025",{amount: '20'}))

// console.log('Is this BlockChain valid ? '+ savjeeCoin.isChainValid());


// savjeeCoin.chain[1].data = {amount:'100'}


// console.log('Is this BlockChain valid after manipulation ? '+ savjeeCoin.isChainValid());


// console.log(JSON.stringify(savjeeCoin, null, 4));


savjeeCoin.createTransaction(new Transaction('address1','address2',100));
savjeeCoin.createTransaction(new Transaction('address2','address1',50));

console.log('\n Starting the miner...');
savjeeCoin.minePendingTransaction('xaviers-address');

console.log('\n Balance of xavier is', savjeeCoin.getBalanceofAddress('xaviers-address'));

console.log('\n Starting the miner again...');
savjeeCoin.minePendingTransaction('xaviers-address');

console.log('\n Balance of xavier is', savjeeCoin.getBalanceofAddress('xaviers-address'));