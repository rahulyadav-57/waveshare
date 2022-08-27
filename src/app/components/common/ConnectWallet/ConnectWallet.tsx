import { AuthService } from "@app/Services";
import { useUserActions } from "@app/_actions/user.actions";
import { authAtom } from "@app/_state";
import { Button } from "antd";
import { FC, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import s from "./ConnectWallet.module.scss";

const ConnectWallet: FC = () => {
  const [isLoaded, setIsloaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // const userActions = useUserActions();

  const [userAuth, setUserAuth] = useRecoilState(authAtom);

  const authInit = async () => {
    await AuthService.init();
    setIsloaded(true);
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

  return (
    <>
      {isLoaded && !userAuth && (
        <Button
          className={s.connectWallet}
          loading={isLoading}
          onClick={() => {
            connectWallet();
          }}
          type="primary"
          // icon={<SearchOutlined />}
        >
          Connect Wallet
        </Button>
      )}
      {userAuth && userAuth.name}
    </>
  );
};

export default ConnectWallet;
