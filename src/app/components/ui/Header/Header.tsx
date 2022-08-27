import { ConnectWallet, UserNotification } from "@app/components/common";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.brand}>
        <NavLink to="/">
          <img src="/assets/images/logo.svg" alt="" />
        </NavLink>
      </div>
      <div className={s.rightCol}>
        <UserNotification />
        <ConnectWallet />
      </div>
    </div>
  );
};

export default Header;
