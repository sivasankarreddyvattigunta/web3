const {Web3} = require('web3');
const web3=new Web3('http://127.0.0.1:7545');
const address='0x307C76d2f4921fea604e6dEB72d0a79b6Ef9f9ec';
const {abi,bytecode}=require('./out/sub.sol/subtraction.json');
const contract=new web3.eth.Contract(abi, address);
async function adding(){
let data=await contract.methods.sub(11,3).call();
console.log(data);
}
adding();
