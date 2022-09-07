import styles from "../styles";
import axios from "axios";
import logo from "../assets/MyWallet.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CreateaccountScreen(){
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordmatch,setPasswordmatch] = useState("");
    const [disable,setDisable] = useState(false);
    function sendaccount(event){
        event.preventDefault();
        if(password !== passwordmatch){
            alert("Senha e confirmação de senha incompatíveis");
            return;
        }
        setDisable(true);
        const objpost = {
            name: name,
            email: email,
            password: password
        };
        const promisse = axios.post("https://localhost:5000/sign-up",objpost);
        //Salvar token e direcionar para tela inicial
        //promisse.then(res => {setUser.setUser(res.data); navigate("/hoje")})
        promisse.catch(()=> {setDisable(false);alert("Nome de usuário e/ou email já utilizado");});
    }
    return(
        <>
        <styles.BACKGROUND>
            <styles.LOGO src={logo}/>
            <styles.FORM onSubmit={sendaccount}>
                <styles.INPUT disable={disable} type="text" required placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
                <styles.INPUT disable={disable} type="text" required placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <styles.INPUT disable={disable} type="password" required placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
                <styles.INPUT disable={disable} type="password" required placeholder="Confirme a senha" value={passwordmatch} onChange={e => setPasswordmatch(e.target.value)}/>
                <styles.BUTTON disable={disable} type="submit">Entrar</styles.BUTTON>
            </styles.FORM>
            <Link to="/"><styles.LINK>Já tem uma conta? Entre agora!</styles.LINK></Link>
        </styles.BACKGROUND>
        </>
    );
}