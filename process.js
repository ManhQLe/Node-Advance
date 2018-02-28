process.on('exit',(c)=>{
    console.log("Exit got called",c);
})

process.on('uncaughtException',(e)=>{
    console.log(e);
    process.exit(1)
})

process.stdin.resume();

console.log();
