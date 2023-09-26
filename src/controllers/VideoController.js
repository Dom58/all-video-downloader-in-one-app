import { createRequire } from "module";
import ytdl from "ytdl-core";
import Twit from 'twit';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

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
    const T = new Twit({
      consumer_key: process.env.TWITTER_API_KEY,
      consumer_secret: process.env.TWITTER_API_SECRET,
      access_token: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });
    const tweetId = req.body;
    try {
      const { data: tweet } = await T.get('statuses/show/:id', { id: tweetId });
      const videoUrl = tweet.extended_entities.media[0].video_info.variants[0].url;

      const response = await axios.get(videoUrl, { responseType: 'stream' });
      response.data.pipe(res);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}
