import { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./VideoCard.module.scss";

interface Props {
  className?: string;
  data: any;
}

const VideoCard: FC<Props> = ({ className, data }) => {
  return (
    <div className={`${s.container} ${className}`}>
      <NavLink to={`/details/${data.id}`}>
        <div className={s.thumbnailWrapper}>
          <img src={`https://ipfs.io/ipfs/${data.thumbnail_id}`} alt="" />
        </div>
        <span className={s.title}>Top 10 Upcoming Web3 Startups In India</span>
      </NavLink>
    </div>
  );
};

export default VideoCard;
