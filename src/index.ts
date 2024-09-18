import { dbconf } from "./config/dbConf";
import { server } from "./server";

const PORT = 5000;

dbconf().then((res) => {
  server.listen(PORT,() => {
    console.log(`server on port ${PORT} 🚀`);
  });
});
