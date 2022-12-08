import { router } from "./src/router/router";
import { blogs } from "src/entity/blog";
import { AppDataSource } from "./src/data-source";
import express from "express";

import bodyParser from "body-parser";

const PORT = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/blog", router);


AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.listen(PORT, () => {
  console.log("App running with port: " + PORT);
});
