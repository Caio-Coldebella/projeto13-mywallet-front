import styles from "../styles";
import styled from "styled-components";
import { useContext, useState } from "react";
import TokenContext from "../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
import sendvalue from "./sendvalue";

export default function NewdebtScreen(){
    const tk = useContext(TokenContext);
    const navigate = useNavigate();
    const [disable,setDisable] = useState(false);
    const [description,setDescription] = useState("");
    const [value,setValue] = useState("");
    function senddebt(event){
        event.preventDefault();
        const route = "new-debt";
        sendvalue(value,setDisable,description,navigate,tk,route);
    }
    return(
        <>
        <BACKGROUND>
            <styles.TOP><p>Nova saída</p></styles.TOP>
            <styles.FORM onSubmit={senddebt}>
                <styles.INPUT disable={disable} type="text" required placeholder="Valor" value={value} onChange={e => setValue(e.target.value)}/>
                <styles.INPUT disable={disable} type="text" required placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
                <styles.BUTTON disable={disable} type="submit">Salvar saída</styles.BUTTON>
            </styles.FORM>
        </BACKGROUND>
        </>
    );
}

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