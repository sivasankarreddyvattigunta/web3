const { Web3 } =require('web3');
const { IpcProvider }=require('web3-providers-ipc');

const web3 = new Web3(new IpcProvider('/home/siva/.ethereum/geth.ipc'));

web3.eth.getAccounts().then(console.log);
const account1=web3.eth.accounts.create();
console.log(account1.address)
console.log(account1.privateKey)
web3.eth.getBalance(account1.address).then(console.log)