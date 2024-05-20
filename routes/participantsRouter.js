import express from "express";

import validateBody from "../helpers/validateBody.js";
import validateID from "../helpers/validateID.js";

import { createParticipantSchema } from "../schemas/participantsSchemas.js";

import {
  getEventAllParticipants,
  createEventParticipant,
} from "../controllers/participantsControllers.js";

const participantsRouter = express.Router();

participantsRouter.get("/", validateID, getEventAllParticipants);

participantsRouter.post(
  "/",
  validateBody(createParticipantSchema),
  createEventParticipant
);

export default participantsRouter;
