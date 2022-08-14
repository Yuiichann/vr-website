import { useEffect, useState } from "react";
import Banner from "./Components/Banner";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import Headset from "./Components/Headset";
import NavMobile from "./Components/NavMobile";
import Video from "./Components/Video";

const App = () => {
  const [navMobile, setNavMobile] = useState<boolean>(false);

  console.log(navMobile);
  return (
    <div className="overflow-hidden relative before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex">
      <Header setNavMobile={setNavMobile} />
      <Banner />

      {/* Mobile Nav */}
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>

      <Experience />
      <Video />
      <Headset />
    </div>
  );
};

export default App;
