import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../contexts/TokenContext";
import axios from "axios";

export default function HomeScreen(){
    const tk = useContext(TokenContext);
    const navigate = useNavigate();
    useEffect(()=>{
        setInterval(()=>{
            axios.post("http://localhost:5000/status",{token: tk.token});
        },5000);
    },[tk.token]);
    return(
        <>
        </>
    );
}