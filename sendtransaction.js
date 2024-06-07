const {Web3}=require('web3');
const web3=new Web3('http://127.0.0.1:7545');
async function send(){
const account = web3.eth.accounts.wallet.add('0x6f31b6fa5ae07893a494201d6f779671f53b90dd71ce9db405fa9946618a5b88');

const tx = 
{ 
    from: account[0].address,
    to: '0xfd9BDb612c59d19b4aA619AD54Fdc8850D0D4aa1', 
    value: web3.utils.toWei('1', 'ether')
};
//the `from` address must match the one previously added with wallet.add

//send the transaction
const txReceipt = await web3.eth.sendTransaction(tx);

console.log('Tx hash:', txReceipt.transactionHash)
web3.eth.getBalance('0xfd9BDb612c59d19b4aA619AD54Fdc8850D0D4aa1').then(console.log)
// ↳ Tx hash: 0x03c844b069646e08af1b6f31519a36e3e08452b198ef9f6ce0f0ccafd5e3ae0e
}
send()