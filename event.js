const EventEmitter = require("events");


const X = new EventEmitter();
X.on("Test",(x)=>{
    console.log("Cool",x);
})

setTimeout(()=>{
    X.emit("Test",1234)
    X.emit("MultiArg",1,2,3)
},1000)


X.on("MultiArg",(a,b,c)=>{
    console.log("Arg",a,b,c)
})