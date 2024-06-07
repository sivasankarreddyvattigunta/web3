let operation = '';
let num1, num2;

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    input = input.trim();
    if (!operation) {
        if (['add', 'sub', 'mul'].includes(input)) {
            operation = input;
            console.log(`Selected operation: ${operation}`);
            console.log('Enter two numbers:');
        } else {
            console.log('Invalid operation. Please select add, sub, or mul.');
        }
    } else {
        let nums = input.split(' ');
        if (nums.length !== 2) {
            console.log('Invalid input. Please enter two numbers separated by space.');
            return;
        }
        num1 = parseInt(nums[0]);
        num2 = parseInt(nums[1]);
      
    



    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        default:
            console.log('Invalid operation.');
            return;
    }
    console.log(`Result: ${result}`);
    process.exit(); // Exit the process after printing the result
}});