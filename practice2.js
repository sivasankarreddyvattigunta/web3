const {Web3}=require('web3')
const web3=new Web3('http://127.0.0.1:7545')
const address='0x82fe84DC0b64Ca4DC3fd9B0F5D5E6ad2aeB319eA'
const abi=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			}
		],
		"name": "add",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
];

	
const token=new web3.eth.Contract(abi,address)
async function add(){
	process.stdin.setEncoding('utf8');
	process.stdin.on('data',function(Input){
  const nums=Input.trim().split(' ');
  let x=parseInt(nums[0]);
  let y=parseInt(nums[1]);
  const add=token.methods.add(x,y).call().then(console.log)
	})
}
add()