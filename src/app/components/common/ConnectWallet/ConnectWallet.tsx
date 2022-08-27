import { AuthService } from "@app/Services";
import { useUserActions } from "@app/_actions/user.actions";
import { authAtom } from "@app/_state";
import { FC, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import s from "./ConnectWallet.module.scss";

const ConnectWallet: FC = () => {
  const [isLoaded, setIsloaded] = useState(false);

  // const userActions = useUserActions();

  const [userAuth, setUserAuth] = useRecoilState(authAtom);

  const authInit = async () => {
    await AuthService.init();
    setIsloaded(true);
  };

  const connectWallet = async () => {
    await AuthService.requestSocialLogin("google");
  };

  useEffect(() => {
    console.log("isLoaded", isLoaded);
    if (!isLoaded) {
      return;
    }
    console.log("isLoaded 2", isLoaded, userAuth);

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
      {userAuth && userAuth.name}
    </>
  );
};

export default ConnectWallet;
