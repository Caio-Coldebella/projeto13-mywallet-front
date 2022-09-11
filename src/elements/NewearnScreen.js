import styles from "../styles";
import styled from "styled-components";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import TokenContext from "../contexts/TokenContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewearnScreen(){
    const tk = useContext(TokenContext);
    const navigate = useNavigate();
    const [disable,setDisable] = useState(false);
    const [description,setDescription] = useState("");
    const [value,setValue] = useState("");
    function sendearn(event){
        event.preventDefault();
        const numvalue = Number(value);
        if(isNaN(numvalue)){
            alert("Insira um valor numérico no campo \"Valor\"");
            return;
        }
        setDisable(true);
        const date = dayjs().format('DD/MM');
        const objpost = {
            name: description,
            date: date,
            value: numvalue
        };
        const promisse = axios.post("http://localhost:5000/home/new-earn",objpost,{headers:{Authentication:tk.token}});
        promisse.then(() => {navigate("/home");})
        promisse.catch((res)=> {
            if(res.response.status === 400){
                alert("Preencha os campos valor e descrição");
            }else if(res.response.status === 500){
                navigate('/');
            }
            setDisable(false);});
    }
    return(
        <>
        <BACKGROUND>
            <TOP><p>Nova entrada</p></TOP>
            <styles.FORM onSubmit={sendearn}>
                <styles.INPUT disable={disable} type="text" required placeholder="Valor" value={value} onChange={e => setValue(e.target.value)}/>
                <styles.INPUT disable={disable} type="text" required placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
                <styles.BUTTON disable={disable} type="submit">Salvar entrada</styles.BUTTON>
            </styles.FORM>
        </BACKGROUND>
        </>
    );
}

const TOP = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 80px;
    margin-bottom: 20px;
    font-size: 26px;
    font-weight: bold;
    color: #FFFFFF;
`;
const BACKGROUND = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
    padding: 0 25px 0 25px;
    background-color: #8C11BE;
`;