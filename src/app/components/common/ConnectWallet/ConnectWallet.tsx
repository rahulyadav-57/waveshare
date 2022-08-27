import { AuthService } from "@app/Services";
import { authAtom } from "@app/_state";
import { Button } from "antd";
import { FC, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import s from "./ConnectWallet.module.scss";
import { transformImage } from "@app/utils/misc";

const ConnectWallet: FC = () => {
  const [isLoaded, setIsloaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const userActions = useUserActions();

  const [userAuth, setUserAuth] = useRecoilState(authAtom);

  const authInit = async () => {
    await AuthService.init();
    setIsloaded(true);
    setIsLoading(false);
  };

  const connectWallet = async () => {
    setIsLoading(true);
    await AuthService.requestSocialLogin("google");
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    (async () => {
      if (!userAuth?.id) {
        let user = await AuthService.requestUserInfo();

        setUserAuth((oldValue: any) => {
          return {
            ...oldValue,
            ...user,
          };
        });
      }
    })();
  }, [isLoaded]);

  useEffect(() => {
    // console.log(userAuth, "userAuth");
  }, [userAuth]);

  useEffect(() => {
    authInit();
  }, []);

  const WalletIcon = () => (
    <img className={s.walletIcon} src="/assets/images/icon/wallet.svg" alt="" />
  );

  return (
    <>
      {isLoaded && !userAuth && (
        <Button
          className={`${s.connectWallet} theme-btn-primary`}
          loading={isLoading}
          onClick={() => {
            connectWallet();
          }}
          type="primary"
          icon={WalletIcon()}
        >
          Connect Wallet
        </Button>
      )}
      {userAuth && (
        <Button className={`${s.profile} theme-btn-primary`}>
          {/* <UserOutlined /> */}
          Hello, {userAuth.name?.split(" ")[0]}
          <img
            className={s.icon}
            src={transformImage(userAuth.picture!!)}
            alt=""
          />
        </Button>
      )}
    </>
  );
};

export default ConnectWallet;
