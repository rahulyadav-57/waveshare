import { FC } from "react";
import Header from "../Header";
import NavSidebar from "../NavSidebar";
import s from "./Layout.module.scss";

interface Props {
  className?: string;
  children?: any;
}
export const Layout: FC<Props> = ({ className = "", children }) => {
  return (
    <div className={`${s.container} ${className}`}>
      <Header />
      <NavSidebar />
      <main className={s.content}>{children}</main>
    </div>
  );
};

export default Layout;
