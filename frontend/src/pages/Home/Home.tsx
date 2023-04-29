import React, { FC, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { getYoutubeVideoData } from "services/video-services";
import "./Home.css";

const Home: FC = () => {
  const [data, setData] = useState("");
  const [values, setValues] = useState({ url: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const searchAVideo = () => {
    if (values && values.url !== "") {
      setLoading(true);
      getYoutubeVideoData(values)
        .then((res) => {
          if (res && !res.error) {
            toast.success("Youtube video retrieved successfully!");
            setData(res.public_url);
            setLoading(true);
          } else {
            setLoading(false);
            toast.error(res.error);
            console.log("=====Error1====", res);
          }
        })
        .catch((error) => {
          console.log("=====Error====", error);
        });
    }
  };

  useEffect(() => {
    if (values && data) {
      setLoading(false);
    }
  }, [values, data]);

  return (
    <>
      <div className="text-huge">
        <h1 className="text-blue">Video Downloader App</h1> <hr />
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <textarea
            className="form-control url-textarea"
            name="url"
            placeholder="Enter any YouTube link"
            onChange={handleChange}
          ></textarea>
          <Button
            variant="primary"
            className="btn btn-sm w-75 mt-3 mb-3"
            onClick={() => searchAVideo()}
            disabled={loading}
          >
            {!loading ? "SEARCH VIDEO" : "Processing..."}
          </Button>
        </div>

        <div className="col-md-8">
          <div className="card">
            {data && data ? (
              <video controls src={data && data} className="video-preview">
                Sorry, your browser doesn't support embedded videos, but don't
                worry, you can
                <a href={values && values.url}>download it</a>
                and watch it with your favorite video player!
              </video>
            ) : (
              <img
                src="https://i.ytimg.com/vi/_JBHw67poeo/hqdefault.jpg"
                className="video-preview"
                alt="preview"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
