import { AuthService } from "@app/Services";
import { authAtom } from "@app/_state";
import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";
import s from "./Membership.module.scss";

const Membership: FC = () => {
  // const [userAuth, setUserAuth] = useRecoilState(authAtom);

  // const getAccount = async () => {
  //   try {
  //     const account = await AuthService.requestWalletInfo();
  //     console.log("account", "account -c");

  //     console.log(account, "account -d");
  //   } catch (error) {
  //     console.log(error, "account - e");
  //   }
  // };

  // useEffect(() => {
  //   if (userAuth) {
  //     console.log(userAuth, "account1");

  //     getAccount();
  //   }
  // }, [userAuth]);
  return <div></div>;
};

export default Membership;
