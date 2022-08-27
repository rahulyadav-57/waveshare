import { FC } from "react";
import s from "./VideoCard.module.scss";

interface Props {
  className?: string;
}

const VideoCard: FC<Props> = ({ className }) => {
  return (
    <div className={`${s.container} ${className}`}>
      <div className={s.thumbnailWrapper}>
        <img src="/assets/images/layout/card.jpg" alt="" />
      </div>
      <span className={s.title}>Top 10 Upcoming Web3 Startups In India</span>
    </div>
  );
};

export default VideoCard;
