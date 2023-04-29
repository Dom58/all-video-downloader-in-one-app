import axios from "axios";

const { REACT_APP_BACKEND } = process.env;

export const getYoutubeVideoData = async (data: any) => {
  const response = (
    await axios.post(`${REACT_APP_BACKEND}/youtube/videos/download`, data)
  ).data;
  return response;
};
