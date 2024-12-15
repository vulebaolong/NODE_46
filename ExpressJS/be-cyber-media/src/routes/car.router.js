import express from "express";
import Cars from "../models/Cars.model.js";
import carController from "../controllers/car.controller.js";

const carRouter = express.Router();

carRouter.get(`/cars-list`, carController.carList);

export default carRouter;