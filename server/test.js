const express = require("express");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();
const http = require("http");
const setObjectif = require("./setobjectif");
const StoreData = require("./storeData");
const sendProgress = require("./sendProgress")

//let time = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//let Velocity = [0, 5, 20, 30, 40, 50, 60, 70, 80, 90, 100];

app.use(cors());


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});


io.on("connection", (socket) => {
    let i = 0;
    socket.on("send_data", () => {
        let IntervalId = setInterval(() => {
            socket.emit("reiceive_data", {time: time[i], velocity: Velocity[i]});
            i++;
            if(i >= time.length){
                clearInterval(IntervalId);
                i = 0;
                socket.emit("end");
            }
        }, 1000);
        
    });

    socket.on("setObjectif", setObjectif);
    socket.on("storeData", StoreData);
    socket.on("send_progression", () => {
        sendProgress().then(result => {
            console.log(result);
            socket.emit("emitProgress", result);
        }).catch(error => {
            console.error(error);
        })
    });
});

server.listen(3001, () => {
    console.log("server listening on port 3001")
});