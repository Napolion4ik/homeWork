import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import "./MainPage.css";

function MainPage() {
  const { isDark, setDark } = useContext(ThemeContext);
  return (
    <>
      <div className={isDark ? "wrapper dark" : "wrapper"}>
        <div className="top">
          <Header setDark={setDark} />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
