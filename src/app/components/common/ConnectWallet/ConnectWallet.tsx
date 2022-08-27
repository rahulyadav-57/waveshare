import { AppConfig } from "@app/config";
import { AppMode, AuthProvider } from "@arcana/auth";
import { FC, useEffect, useState } from "react";
import s from "./ConnectWallet.module.scss";

const ConnectWallet: FC = () => {
  const [user, setUser] = useState({ loggedIn: false });

  const authInit = async () => {
    const auth = new AuthProvider(AppConfig.ARCANA_APP_ID!!);

    await auth.init({
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
