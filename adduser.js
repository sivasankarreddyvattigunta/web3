const {Web3}=require('web3');
const web3=new Web3('http://127.0.0.1:7545')
const address='0x8dc56319b92b0D22f109Eb63eD1962F6131F5A11';
const {abi,bytecode}=require('/home/siva/practice/out/dao.sol/Authentication.json')
const authentication=new web3.eth.Contract(abi,address);
async function addu(useraddress, ownerPassword, newpassword) {
    const user1 = await authentication.methods.addUser(useraddress, ownerPassword, newpassword).send({from:'0xda8cCC8c19870E6D0c3eC1d1Db03d4Ee331eA8c7'});
    if(user1){
    console.log('User successfully created');}
    else{
        console.log('error');
    }
}
module.exports={addu};