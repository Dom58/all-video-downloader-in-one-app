import express from "express";
import ytdl from "ytdl-core";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to youtube video downloader" });
});

app.get("/download", async (req, res) => {
  try {
    const url = req.query && req.query.url;
    const videoInfo = await ytdl.getInfo(url);
    const title = videoInfo.videoDetails.title;
    const videoOptions = ytdl.chooseFormat(videoInfo.formats, { quality: "highest" });

    res.setHeader(
      "Content-Disposition",
      `attachment; filename*=UTF-8''${encodeURIComponent(title)}.mp4`
    );

    ytdl(url, { videoOptions }).pipe(res);

    res.json({ status: 200, message: "Youtube video downloaded successfully!" });

  } catch(error) {
    res.json({ status: 500, error: error.message });
  }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
