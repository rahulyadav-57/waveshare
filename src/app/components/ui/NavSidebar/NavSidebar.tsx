import { AppConstant } from "@app/constant/AppConstant";
import { authAtom } from "@app/_state";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import s from "./NavSidebar.module.scss";

const NavSidebar: FC = () => {
  const userAuth = useRecoilValue(authAtom);

  return (
    <div className={s.container}>
      {AppConstant.navSidebar.map((item, i) => (
        <NavLink
          to={item.url}
          className={`${s.item} ${
            item.isPrivate && !userAuth?.id ? "d-none" : ""
          }`}
          key={i}
          title={item.label}
        >
          <img src={item.icon} alt={item.label} />
        </NavLink>
      ))}
    </div>
  );
};

export default NavSidebar;
