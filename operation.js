const {Web3}=require('web3');
const web3=new Web3('http://127.0.0.1:7545');
const address='0x9A1648CC54934043750c5E703de872889773af68';
const  abi=[
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
	},
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
		"name": "subtraction",
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
]
const operation=new web3.eth.Contract(abi,address);
    process.stdin.setEncoding('utf8');
    console.log('Enter 1 for addition or 2 for subtraction:');
    process.stdin.on('data',async function (input) {
       let choice = parseInt(input.trim());
       let num1,num2;
    process.stdin.once('data',function(input){
        num1=parseInt(input.trim())
  
    process.stdin.once('data',function(input){
        num2=parseInt(input.trim())
   
        performOperation(choice,num1,num2);
        
    });
})
})
async function performOperation(choice,num1,num2) {
	process.stdin.once('data',function(input){
        num1=parseInt(input.trim())
  
    process.stdin.once('data',function(input){
        num2=parseInt(input.trim())
   
        performOperation(choice,num1,num2);
        
    });
})
    switch (choice) {
        
        case 1:
			
            let r = await operation.methods.add(num1, num2).call();
            console.log(r);
            break;
        case 2:
            let e = await operation.methods.subtraction(num1, num2).call();
            console.log(e);
            break;
    }
	process.exit();
} 


