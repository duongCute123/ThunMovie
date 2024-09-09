
import { useDispatch, useSelector } from "react-redux";
import Routeer from "./router/router";
import LoadingPage from "./main/component/fallback/loading";
import { BeatLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { anime } from "./store/anime";
const App = () => {
  return (
    <div className=" bg-black/95 min-h-screen">
      <Routeer />
    </div>
  );
};

export default App;