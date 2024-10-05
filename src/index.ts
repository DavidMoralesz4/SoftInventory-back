import { dbconf } from "./config/dbConf";
import { PORT } from "./config/envs";
import { server } from "./server";
import {swaggerDocs} from './docs/swagger'

dbconf().then((res) => {
  server.listen(PORT,() => {
    console.log(`server on port ${PORT} 🚀`);
    swaggerDocs(server, PORT)
  });
});
