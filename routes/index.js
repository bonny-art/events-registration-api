import express from "express";

import eventsRoutes from "./eventsRouter.js";
import participantsRoutes from "./participantsRouter.js";

const router = express.Router();

router.use("/events", eventsRoutes);
router.use("/participants", participantsRoutes);

export default router;
