import { FC } from "react";
import s from "./UserNotification.module.scss";

const UserNotification: FC = () => {
  return (
    <div className={s.container}>
      <span className={s.action}>
        <span className={s.count}>1</span>
        <img src="/assets/images/icon/notification.png" alt="" />
      </span>
    </div>
  );
};

export default UserNotification;
