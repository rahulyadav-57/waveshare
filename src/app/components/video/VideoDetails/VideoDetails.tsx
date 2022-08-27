import { VideoPlayer } from "@app/components/common";
import { FC } from "react";
import ContentCreatorDetails from "./ContentCreatorDetails";
import s from "./VideoDetails.module.scss";

const VideoDetails: FC = () => {
  return (
    <div className={s.container}>
      <VideoPlayer src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />

      <div className={s.info}>
        <div className={s.content}>
          <span className={s.title}>
            Top 10 Upcoming Web3 Startups In India
          </span>
          <p>
            Here comes the description of the video so users can see details.
            Videos can attach links as well. It is similar to a bio but just
            that it is a bio for a video.{" "}
          </p>
        </div>
        <div className={s.wave}>
          <img src="/assets/images/icon/logo-icon.png" alt="" /> Wave (912
          Lowaved It!)
        </div>
      </div>
      <ContentCreatorDetails />
    </div>
  );
};

export default VideoDetails;
