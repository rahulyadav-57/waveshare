import AppRouter from "./AppRouter";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
// import "swiper/swiper.scss";
// import "./styles/app.scss";

// ApplyInterceptor();
const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <>
          <div className="app-container">
            <AppRouter />
          </div>
        </>
        {/* <RouteChangeTracker /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
