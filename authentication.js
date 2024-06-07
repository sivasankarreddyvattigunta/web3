const {Web3}=require('web3');
const web3=new Web3('http://127.0.0.1:7545');
const {login}=require('./login.js');
const {addu}=require('./adduser.js');
const address='0x8dc56319b92b0D22f109Eb63eD1962F6131F5A11';
const {abi,bytecode}=require('/home/siva/practice/out/dao.sol/Authentication.json')
const authentication=new web3.eth.Contract(abi,address);

console.log('1.add user 2.request to become a user 3.Login 4.getreuests')
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    input = parseInt(input.trim());
    switch (input) {
        case 1:
            console.log('please enter user, owner pass, new password for user (separated by space)');
            process.stdin.once('data', function(userData) {
                const [useraddress, ownerPassword, newpassword] = userData.trim().split(' ');
                addu(useraddress, ownerPassword, newpassword);
            });
            break;
        case 2:
            console.log('please eneter your address to become a user ');
            process.stdin.once('data',function(userData){
                const useraddress=userData.trim();
                request(useraddress);
            })
            break;
        case 3:
                console.log('please eneter your address and password ');
                process.stdin.once('data',function(userData){
                    const [useraddress,password]=userData.trim().split(' ');
                    login(useraddress,password);
                })
                break;
        case 4:
            console.log('please enete details');
        
        
    }
});

async function request(useraddress){
    const user1=await authentication.methods.requestAddUser(useraddress).call();
    if(user1){
        console.log('request sent successfully');
    }
    else{
        console.log('unsuccessful user already exists');
    }
}

