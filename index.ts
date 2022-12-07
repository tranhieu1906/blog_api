import { AppDataSource } from "./src/data-source";

// import { Product } from "./src/entity/Product";

import express from "express";

import bodyParser from "body-parser";

const PORT = 3000;

AppDataSource.initialize().then(async (connection) => {
  const app = express();

  app.use(bodyParser.json());

//   const ProductRepo = connection.getRepository(Product);

  app.listen(PORT, () => {
    console.log("App running with port: " + PORT);
  });
});
