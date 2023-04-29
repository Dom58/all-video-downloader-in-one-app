import express from "express";

import users from "./users.js";
import videos from "./videos.js";

import 'dotenv/config';

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: `Welcome to ${process.env.APP_NAME} APIs`,
  });
});

router.use("/users", users);
router.use("/videos", videos);

export default router;
