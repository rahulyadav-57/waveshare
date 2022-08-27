import { FC, useEffect, useRef, useState } from "react";
import s from "./VideoPlayer.module.scss";
// import ReactPlayer from "react-player";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";

interface Props {
  src: string;
}

const VideoPlayer: FC<Props> = ({ src = "" }) => {
  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const videoHandler = (control: any) => {
    if (videoRef === null) {
      return;
    }
    const videoRefTemp: any = videoRef.current;
    if (!playing) {
      videoRefTemp.play();
      setPlaying(true);
    } else {
      videoRefTemp.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      className={`${s.playerContainer} ${playing ? s.playing : ""}`}
      onClick={videoHandler}
    >
      <span className={s.controls}>{!playing && <PlayCircleOutlined />}</span>

      <div>
        <video
          ref={videoRef}
          className="video"
          poster="/assets/images/layout/card.jpg"
          src={src}
          controls={playing}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
