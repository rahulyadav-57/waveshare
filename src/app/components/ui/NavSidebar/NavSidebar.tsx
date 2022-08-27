import { AppConstant } from "@app/constant/AppConstant";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./NavSidebar.module.scss";

const NavSidebar: FC = () => {
  return (
    <div className={s.container}>
      {AppConstant.navSidebar.map((item, i) => (
        <NavLink to={item.url} className={s.item} key={i} title={item.label}>
          <img src={item.icon} alt={item.label} />
        </NavLink>
      ))}
    </div>
  );
};

export default NavSidebar;
