import express from "express";

import eventsRoutes from "./eventsRouter.js";

const router = express.Router();

router.use("/events", eventsRoutes);

export default router;
