import { AppConfig } from "@app/config";
import { AppMode, AuthProvider } from "@arcana/auth";
import { FC, useEffect, useState } from "react";
import s from "./ConnectWallet.module.scss";

const ConnectWallet: FC = () => {
  const [user, setUser] = useState({ loggedIn: false });

  const initWallet = async () => {
    const auth = new AuthProvider(`${AppConfig.ARCANA_APP_ID}`);
    const position = "left"; // values - 'left' or 'right'
    await auth.init({ appMode: AppMode.Widget, position });
    // provider = auth.provider;
    // const provider = await getWalletInstance();
    // provider.on("connect", async () => {
    //   const sp = await getStorageProvider(provider);
    //   await sp.login();
    //   setUser({ loggedIn: true });
    // });
    setTimeout(() => {}, 5000);
  };

  useEffect(() => {
    initWallet();
  }, []);
  return (
    <>
      <div
        className={s.connectWallet}
        onClick={() => {
          initWallet();
        }}
      >
        Connect Wallet
      </div>
    </>
  );
};

export default ConnectWallet;
