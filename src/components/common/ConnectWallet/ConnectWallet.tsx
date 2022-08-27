import { AppConfig } from "@app/config";
import { AuthProvider } from "@arcana/auth";
import { FC, useEffect, useState } from "react";
import s from "./ConnectWallet.module.scss";

const ConnectWallet: FC = () => {
  const [user, setUser] = useState({ loggedIn: false });

  const authInit = async () => {
    const auth = new AuthProvider("2166");

    await auth.init({
      //appMode can be 0, 1, or 2 depending upon wallet UI mode that needs to be configured
      // no ui, widget, full ui modes.
      appMode: 2,
      position: "right",
    });

    // await auth.loginWithSocial("google");
  };

  useEffect(() => {
    authInit();
  }, []);
  return (
    <>
      <div className={s.connectWallet}>Connect Wallet</div>
    </>
  );
};

export default ConnectWallet;
