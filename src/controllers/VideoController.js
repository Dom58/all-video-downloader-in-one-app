import ytdl from "ytdl-core";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// import { Video } from './src/database/models';

export default class VideoController {
  /**
   * Create the project
   * @param {object} data data containing project information
   * @returns {string|object} payload
   */
  static async createYoutubeVideoRequest(req, res) {
    try {
      const url = req.body && req.body.url;
      const videoInfo = await ytdl.getInfo(url);
      const title = videoInfo.videoDetails.title;
      const videoOptions = ytdl.chooseFormat(videoInfo.formats, {
        quality: "highest",
      });

      res.setHeader(
        "Content-Disposition",
        `attachment; filename*=UTF-8''${encodeURIComponent(title)}.mp4`
      );

      ytdl(url, {
        videoOptions
      }).pipe(res);

      let response_url = [];
      videoInfo.formats.map(async (res) => {
        response_url = res.url;
        return await response_url;
      });

      // Saving video to the database to make the playlist which will be 
      // Used in the future of a user

      // if(response_url&&response_url) {
      //   // Video.create( {
      //   //   name: "Tester",
      //   //   platform: "Web",
      //   //   url: response_url
      //   // })
      // }

      res.json({
        status: 200,
        message: "Youtube video fetched successfully!",
        video_title: title,
        public_url: response_url,
        data: videoOptions,
      });
    } catch (error) {
      res.json({
        status: 500,
        error: error.message
      });
    }
  }

  static async createTwitterVideoRequest(req, res) {
    try {
      let folder = './static/videos/twitter';
      var fs = require('fs');
      
      if (!fs.existsSync(folder)){
          fs.mkdirSync(folder, { recursive: true });
      }

      // This feature will be implemented soon...
      res.json({
        status: 200,
        message: "Twitter video fetched successfully!",
        // data: result,
      });
    } catch (error) {
      console.log("error=====", error);
      res.json({
        status: 500,
        error: error.message
      });
    }
  }
}
