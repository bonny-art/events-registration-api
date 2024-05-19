import express from "express";

import validateID from "../helpers/validateID.js";

import { getEventAllParticipants } from "../controllers/participantsControllers.js";

const participantsRouter = express.Router();

participantsRouter.get("/", validateID, getEventAllParticipants);

export default participantsRouter;
