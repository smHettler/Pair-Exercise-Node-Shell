module.exports = function () {


    process.stdout.write(`${process.cwd()}`)
}

 // process.stdout.write('prompt > '); 

    // process.stdin.on('data', (data) => {
    //     const cmd = data.toString().trim();
    //     if (cmd === 'pwd') {
    //         process.stdout.write(`${process.cwd()}`);
    //     } else {
    //         process.stdout.write(cmd);
    //     }
        
    //     process.stdout.write('\nprompt > ');
    // })