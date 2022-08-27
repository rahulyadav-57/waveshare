import { Button } from "antd";
import { FC } from "react";
import RecentUploads from "../../RecentUploads";
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
        <div className={s.actions}>
          <Button className={`${s.subscribe} theme-btn-primary`}>
            Subscribe
          </Button>
          <Button className={`${s.mintMembership} theme-btn-primary`}>
            Membership
          </Button>
        </div>
      </div>
      <div className={s.similarContent}>
        <RecentUploads heading="More like this" />
      </div>
    </div>
  );
};

export default ContentCreatorDetails;
