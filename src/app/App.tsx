import AppRouter from "./AppRouter";
import { FC } from "react";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
// import "swiper/swiper.scss";
// import "./styles/app.scss";

import "./styles/theme.scss";

// ApplyInterceptor();
const App: FC = () => {
  return (
    <>
      <RecoilRoot>
        <HashRouter>
          <>
            <div className="app-container">
              <AppRouter />
            </div>
          </>
          {/* <RouteChangeTracker /> */}
        </HashRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
