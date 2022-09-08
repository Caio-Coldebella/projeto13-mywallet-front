import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginScreen from "./elements/LoginScreen";
import CreateaccountScreen from "./elements/CreateaccountScreen";
import TokenContext from "./contexts/TokenContext";
import HomeScreen from "./elements/HomeScreen";
import NewearnScreen from "./elements/NewearnScreen";
import NewdebtScreen from "./elements/NewdebtScreen";
import "./css/reset.css";
import "./css/style.css";
import { useState } from "react";

export default function App(){
  const [token,setToken] = useState("");
  return(
    <>
    <TokenContext.Provider value={{token,setToken}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen/>} />
        <Route path="/sign-up" element={<CreateaccountScreen/>} />
        <Route path="/home" element={<HomeScreen/>} />
        <Route path="/home/new-earn" element={<NewearnScreen/>}/>
        <Route path="/home/new-debt" element={<NewdebtScreen/>}/>
      </Routes>
    </BrowserRouter>
    </TokenContext.Provider>
    </>
  );
}