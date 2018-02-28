const EventEmitter = require("events");


const X = new EventEmitter();
X.on("Test",(x)=>{
    console.log("Cool",x);
})

setTimeout(()=>{
    X.emit("Test",1234)

},1000)


