"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const PORT = 5000;
server_1.server.listen(() => {
    console.log(`server on port ${PORT} 🚀`);
});
