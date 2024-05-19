import express from "express";
import { getEvents } from "../controllers/eventsControllers.js";

const eventsRouter = express.Router();

eventsRouter.get("/", getEvents);

export default eventsRouter;
