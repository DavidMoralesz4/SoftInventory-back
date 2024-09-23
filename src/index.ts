import { dbconf } from "./config/dbConf";
import { PORT } from "./config/envs";
import { server } from "./server";

dbconf().then((res) => {
  server.listen(PORT,() => {
    console.log(`server on port ${PORT} 🚀`);
  });
});
