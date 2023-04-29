import express from "express";
import VideoController from "../controllers/VideoController.js";

const router = express.Router();

router.post("/youtube/download", VideoController.createYoutubeVideoRequest);
router.post("/twitter/download", VideoController.createTwitterVideoRequest);

export default router;
