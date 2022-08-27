import { FC } from "react";
import Header from "../Header";
import s from "./Layout.module.scss";

interface Props {
  className?: string;
  children?: any;
}
export const Layout: FC<Props> = ({ className = "", children }) => {
  return (
    <div className={`${className}`}>
      <Header />
      <main className={s.content}>{children}</main>
    </div>
  );
};

export default Layout;
