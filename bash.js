
process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
        const pwd = require('./pwd');
        pwd(done);
    } else if (cmd === 'ls') {
        const ls = require('./ls');
        ls(done);
    } else if (cmd.startsWith('cat')) {
        let file = cmd.split(' ')[1];
        const cat = require('./cat');
        cat(file, done);
    } else if (cmd.startsWith('curl')) {
        let url = cmd.split(' ')[1];
        const curl = require('./curl');
        curl(url, done);
    }
    else {
        done('You typed: ' + cmd);
    }
});
//when input === 'pwd, return full path to current working directory

const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt>');
}
