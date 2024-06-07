const {Web3, UnsupportedTransactionTypeError}=require('web3');
const web3=new Web3('http://127.0.0.1:7545');
const address='0x40A572721ff44f9d890788299C09D4523FBa45B8';
const abi=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_member",
				"type": "address"
			}
		],
		"name": "addMember",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			}
		],
		"name": "createProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			}
		],
		"name": "executeProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			}
		],
		"name": "ProposalCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_vote",
				"type": "bool"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "vote",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "votes",
				"type": "uint256"
			}
		],
		"name": "Voted",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "members",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proposalCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "proposals",
		"outputs": [
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "votes",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "executed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const dao=new web3.eth.Contract(abi,address);
mixture();
async function mixture(){
    console.log('select \n 1.Add member\n 2.Check membership \n 3.vote');
    process.stdin.setEncoding('utf8');
    process.stdin.on('data',function(input){
        choice=parseInt(input.trim());
        switch(choice){
            case 1:
                console.log('please provide the address');
                process.stdin.once('data',function(userdata){
                    const address1=userdata.trim();
                    addmember(address1);
                })
				
                break;
            case 2:
                console.log('enter address to check whether ur a member or not');
                process.stdin.once('data',function(userdata){
                    const address2=userdata.trim();
                    checkmembership(address2).then(console.log);
                    
                })
				
                break;
                case 3:
					console.log('please enter ur address and id of the proposal and also boolean value of ur vote');
					process.stdin.once('data', function(userdata) {
						const inputArray = userdata.toString().trim().split(' ');
						const address2 = inputArray[0];
						const id = parseInt(inputArray[1]);
						const boolstr=inputArray[2];
						const bool2=boolstr==='true';

                    vote(address2,id,bool2);
                })
				
                break;
				case 4:
					console.log('please enter ur address and id of proposal to know further details');
					process.stdin.once('data',function(userdata){
						const input=userdata.trim().split(' ');
						const address1=input[0];
						const id=parseInt(input[1]);
						proposal(address1,id);
					})
					break;
				case 5:
					console.log('please enter adrres and id of the propoasal to execute ');
					process.stdin.once('data',function(userdata){
						const input=userdata.trim().split(' ');
						const address1=input[0];
						const id=parseInt(input[1]);
						executeProposal(address1,id);
					})
					break;
        }
		
    })
}

async function addmember(address1){
	
    const user=await dao.methods.addMember(address1).send({from:'0xda8cCC8c19870E6D0c3eC1d1Db03d4Ee331eA8c7'});
    if(user){
        console.log('successfull');
    }
    else{
        console.log('no');
    }
}
async function checkmembership(address2){
    const user=await dao.methods.members(address2).call();
    return user;
}
async function vote(address2,id,bool2){
	console.log('inside case 3')
	const member1=await checkmembership(address2);
	if(member1){
    
	const voted=await dao.methods.vote(id,bool2).send({from:'0xda8cCC8c19870E6D0c3eC1d1Db03d4Ee331eA8c7'});
	console.log(voted)
}
else{
	console.log('not a member')
}}
async function proposal(address1,id){
	const member=await checkmembership(address1);
	if(member){
		await dao.methods.proposals(id).call().then(console.log);
	}
}
async function executeProposal(address1,id){
const member=await checkmembership(address1);
const user=await dao.methods.admin().call();
console.log(user);
if(user===address1){
 dao.methods.executeProposal(user).send({from:user}).then(console.log);

}
}