import { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./VideoCard.module.scss";

interface Props {
  className?: string;
}

const VideoCard: FC<Props> = ({ className }) => {
  return (
    <div className={`${s.container} ${className}`}>
      <NavLink to="/details">
        <div className={s.thumbnailWrapper}>
          <img src="/assets/images/layout/card.jpg" alt="" />
        </div>
        <span className={s.title}>Top 10 Upcoming Web3 Startups In India</span>
      </NavLink>
    </div>
  );
};

export default VideoCard;
