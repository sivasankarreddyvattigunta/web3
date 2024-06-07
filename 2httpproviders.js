const { Web3 } =require('web3');
const web3= new Web3('http://127.0.0.1:7545');
const web3_2=new Web3('http://127.0.0.1:8545');
web3_2.eth.getAccounts().then(console.log);
web3.eth.getAccounts().then(console.log);
const account = web3.eth.accounts.wallet.add('0x6f31b6fa5ae07893a494201d6f779671f53b90dd71ce9db405fa9946618a5b88');
const tx={
    from:account[0].address,
    to:'0x9977183999BdDEc080D77F07262f22985b68c04a',
    value: web3.utils.toWei('1', 'ether')
}
web3.eth.sendTransaction(tx).then(console.log);

