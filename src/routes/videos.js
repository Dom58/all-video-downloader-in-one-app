import express from "express";
import VideoController from "../controllers/VideoController.js";

const router = express.Router();

router.post("/download", VideoController.createVideoReaquest);

export default router;
