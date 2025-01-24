import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MainMenu from "./Components/Mainmenu/MainMenu";
import Sidebar from "./Components/SideBar/Sidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 920); // Sidebar is visible by default on larger screens
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);

      // Automatically show or hide sidebar based on screen size
      if (window.innerWidth > 920) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Header
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        screenSize={screenSize}
      />
      <div className="Container">
        {showSidebar && <Sidebar />}
        <MainMenu showSidebar={showSidebar} />
      </div>
    </div>
  );
}

export default App;
