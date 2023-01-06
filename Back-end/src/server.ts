import app from "./app";

import { createAdm } from "./helpers";
import "dotenv/config";

(async () => {
  const PORT = process.env.PORT || 8080;

  const mongoDB = require("mongoose");
  const uri = process.env.MONGO_URL;
  mongoDB
    .connect(uri)
    .then(() => {
      app.listen(PORT, async () => {
        await createAdm();
        console.log("Running at http://localhost:" + PORT);
      });
    })
    .catch((err: JSON) => {
      console.log(err);
    });
})();
