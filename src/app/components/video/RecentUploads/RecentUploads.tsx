import { FC } from "react";
import VideoCard from "../VideoCard";
import s from "./RecentUploads.module.scss";

interface Props {
  heading: string;
}

const RecentUploads: FC<Props> = ({ heading }) => {
  return (
    <div className={s.container}>
      <span className={`heading-default ${s.heading}`}>{heading}</span>
      <div className={s.videoContent}>
        {new Array(20).fill(0).map((_, i) => (
          <VideoCard key={i} className={s.card} />
        ))}
      </div>
    </div>
  );
};

export default RecentUploads;
