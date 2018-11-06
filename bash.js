
process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
        const pwd = require('./pwd');
        pwd();
    } else if (cmd === 'ls') {
        const ls = require('./ls');
        ls();
    } else if (cmd.startsWith('cat')) {
        let file = cmd.split(' ')[1];
        const cat = require('./cat');
        cat(file);
    } else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt>');
    }
});
//when input === 'pwd, return full path to current working directory

