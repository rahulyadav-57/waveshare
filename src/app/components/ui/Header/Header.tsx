import { ConnectWallet } from "@app/components/common";
import { FC } from "react";
import s from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={s.container}>
      <ConnectWallet />
    </div>
  );
};

export default Header;
