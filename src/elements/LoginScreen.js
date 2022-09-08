import styles from "../styles";
import logo from "../assets/MyWallet.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import TokenContext from "../contexts/TokenContext";
import axios from "axios";

export default function LoginScreen(){
    const st = useContext(TokenContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disable,setDisable] = useState(false);
    const navigate = useNavigate();
    function sendlogin(event){
        event.preventDefault();
        setDisable(true);
        const objpost = {
            email: email,
            password: password
        };
        const promisse = axios.post("http://localhost:5000/",objpost);
        promisse.then((res) => {
            const tok = `Bearer ${res.data}`;
            st.setToken(tok)
            navigate("/home");})
        promisse.catch((res)=> {
            if(res.response.status === 404 || res.response.status === 400){
                alert("Email e/ou senha incorreto");
            }
            setDisable(false);});
    }
    return(
        <>
        <styles.BACKGROUND>
            <styles.LOGO src={logo}/>
            <styles.FORM onSubmit={sendlogin}>
                <styles.INPUT disable={disable} type="text" required placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <styles.INPUT disable={disable} type="password" required placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
                <styles.BUTTON disable={disable} type="submit">Entrar</styles.BUTTON>
            </styles.FORM>
            <Link to="/sign-up"><styles.LINK>Primeira vez? Cadastre-se!</styles.LINK></Link>
        </styles.BACKGROUND>
        </>
    );
}