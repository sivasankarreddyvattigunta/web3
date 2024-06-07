const {Web3}=require('web3');
const web3=new Web3('http://127.0.0.1:7545');
const address='0xcd683cBc25975D5E201DCD01B44A7988520338D3';
const abi=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			}
		],
		"name": "addPerson",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "getPerson",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const person=new web3.eth.Contract(abi,address);

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    const data1 = input.trim().split(' ')
    const name = data1[0];
    const age = parseInt(data1[1]);
    person.methods.addPerson(name, age).send({from: '0xda8cCC8c19870E6D0c3eC1d1Db03d4Ee331eA8c7'})
        .on('transactionHash', function(hash){
            console.log("Transaction hash: " + hash);
        })
    
});

person.methods.getPerson('siv').call()
    .then(console.log)
    .catch(console.error);