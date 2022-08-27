import { FC } from "react";
import s from "./ContentCreatorDetails.module.scss";

const ContentCreatorDetails: FC = () => {
  return (
    <div className={s.container}>
      <img
        className={`r-10 ${s.banner}`}
        src="/assets/images/layout/card.jpg"
        alt=""
      />
      <div className={s.details}>
        <div className={s.profile}>
          <img
            className={s.profileImage}
            src="/assets/images/icon/user.png"
            alt=""
          />
          <div className={s.userWrapper}>
            <span className={s.user}>UpFold By CoinDCX</span>
            <span className={s.subscriber}>1 Million Wavers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCreatorDetails;
