const {Web3}=require('web3');
const web3=new Web3('http://127.0.0.1:7545')
const address='0x076E54983528fE85a8C823486bE3A83cd2787710';
const abi=require('./abi.json')
const authentication=new web3.eth.Contract(abi,address);
async function request(useraddress){
    const user1=await authentication.methods.requestAddUser(useraddress).call();
    if(user1){
        console.log('request sent successfully');
    }
    else{
        console.log('unsuccessful user already exists');
    }
}
module.exports={request};