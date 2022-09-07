import styles from "../styles";
import logo from "../assets/MyWallet.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginScreen(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disable,setDisable] = useState(false);
    return(
        <>
        <styles.BACKGROUND>
            <styles.LOGO src={logo}/>
            <styles.FORM onSubmit={console.log("sendlogin")}>
                <styles.INPUT disable={disable} type="text" required placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <styles.INPUT disable={disable} type="password" required placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
                <styles.BUTTON disable={disable} type="submit">Entrar</styles.BUTTON>
            </styles.FORM>
            <Link to="/sign-up"><styles.LINK>Primeira vez? Cadastre-se!</styles.LINK></Link>
        </styles.BACKGROUND>
        </>
    );
}