const { Web3 } = require('web3');
const web3=new Web3('http://127.0.0.1:7545');
web3.eth.getAccounts().then(console.log)
web3.eth.getBlock().then(console.log)

async function balance() {
    const balanceinwei = await web3.eth.getBalance('0xda8cCC8c19870E6D0c3eC1d1Db03d4Ee331eA8c7');
    const balanceinether = web3.utils.fromWei(balanceinwei, 'ether');
    console.log(balanceinether, "siva sankar ");
    await web3.eth.getGasPrice().then(
        gasfeeinwei=>{
            const gasinether=web3.utils.fromWei(gasfeeinwei,'ether')
        console.log(gasinether,'ether');   })
        web3.eth.getBlockTransactionCount().then(data => {
            console.log(data, 'siva data');
        });
    web3.eth.accounts.wallet.create(1);
    console.log(web3.eth.accounts.wallet[0].privateKey)
    
}
balance();
