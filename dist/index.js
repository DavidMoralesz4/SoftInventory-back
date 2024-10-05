"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConf_1 = require("./config/dbConf");
const envs_1 = require("./config/envs");
const server_1 = require("./server");
const swagger_1 = require("./docs/swagger");
(0, dbConf_1.dbconf)().then((res) => {
    server_1.server.listen(envs_1.PORT, () => {
        console.log(`server on port ${envs_1.PORT} 🚀`);
        (0, swagger_1.swaggerDocs)(server_1.server, envs_1.PORT);
    });
});
