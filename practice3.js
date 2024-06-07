let x;
let nums;
process.stdin.setEncoding('utf8');
process.stdin.on('data',function(input){
    nums=input.trim().split(' ');
    x=parseInt(nums[0])
    print()
})
async function print(){
    await console.log(x)
}
let y;
process.stdin.setEncoding('utf8');
process.stdin.on('data',function(input1){
    y=nums[1]
    print1()
})
async function print1(){
    await console.log(y+y)
}