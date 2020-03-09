const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    data = data.toString().trim().split(' ');
  const cmd = data[0];
    if (cmd === 'pwd'){
    pwd();
} else if (cmd === 'ls') {
    ls();
} else if (data[1] !== undefined) {
    let fileName = data[1];
    cat(fileName);
}
// process.stdout.write(`${process.cwd()}`);
process.stdout.write('\nprompt > ');
})