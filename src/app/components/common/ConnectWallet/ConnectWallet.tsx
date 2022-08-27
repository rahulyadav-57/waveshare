import { AuthService } from "@app/Services";
import { FC, useEffect, useState } from "react";
import s from "./ConnectWallet.module.scss";

const ConnectWallet: FC = () => {
  const [user, setUser] = useState({ loggedIn: false });
  const [isLoaded, setIsloaded] = useState(false);

  const authInit = async () => {
    await AuthService.init();
    setIsloaded(true);
  };

  const connectWallet = async () => {
    await AuthService.requestSocialLogin("google");
  };

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    (async () => {
      console.log(await AuthService.requestUserInfo());
    })();
  }, [isLoaded]);

  useEffect(() => {
    authInit();
  }, []);

  return (
    <>
      {isLoaded && (
        <div
          className={s.connectWallet}
          onClick={() => {
            connectWallet();
          }}
        >
          Connect Wallet
        </div>
      )}
    </>
  );
};

export default ConnectWallet;
