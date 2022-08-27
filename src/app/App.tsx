import AppRouter from "./AppRouter";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
// import "swiper/swiper.scss";
// import "./styles/app.scss";

// ApplyInterceptor();
const App: FC = () => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <>
            <div className="app-container">
              <AppRouter />
            </div>
          </>
          {/* <RouteChangeTracker /> */}
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
