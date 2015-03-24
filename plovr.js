#!/usr/bin/env node

var spawn = require('child_process').spawn,
    child;

// java -jar ' + __dirname + '/plovr/plovr.jar build ' + plovrFilePath
var args = process.argv.slice(2);
args.splice(0, 0, '-jar', __dirname + '/plovr.jar');

var proc = spawn('java', args, { stdio: 'inherit' });
proc.on('exit', function (code, signal) {
  process.on('exit', function(){
    if (signal) {
      process.kill(process.pid, signal);
    } else {
      process.exit(code);
    }
  });
});

// terminate children.
process.on('SIGINT', function () {
  proc.kill('SIGINT'); // calls runner.abort()
  proc.kill('SIGTERM'); // if that didn't work, we're probably in an infinite loop, so make it die.
  process.kill(process.pid, 'SIGINT');
});