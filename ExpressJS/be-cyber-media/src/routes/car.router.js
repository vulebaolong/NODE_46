import express from "express";
import Cars from "../models/Cars.model.js";

const carRouter = express.Router();

carRouter.get(`/cars`, async (req, res, next) => {
   // const cars = await sequelize.query(`SELECT * FROM cars`);
   const { page } = req.query;
   console.log(+page);

   const cars = await Cars.findAll({ raw: true });
   // console.log({ cars });

   // console.log({ cars });
   // console.log(`cars - 1`, cars[0]);
   // // console.log(`cars`, cars);

   res.json(cars);
});

export default carRouter;
