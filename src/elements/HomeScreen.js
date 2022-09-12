import styles from "../styles";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../contexts/TokenContext";
import { DashCircle,PlusCircle,BoxArrowRight} from 'react-bootstrap-icons';
import axios from "axios";
import Transaction from "./Transaction";

export default function HomeScreen(){
    const tk = useContext(TokenContext);
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({});
    const [empty,setEmpty] = useState(true);
    useEffect(()=>{
        setInterval(()=>{
            axios.post("http://localhost:5000/status",{token: tk.token});
        },15000);
    },[tk.token]);
    useEffect(()=>{
        const promisse = axios.get("http://localhost:5000/home",{headers:{Authentication:tk.token}});
        promisse.then(res=>{
            setUserdata(res.data);
            if(res.data.transactions.length > 0){
                setEmpty(false);
            }
        });
        promisse.catch(()=>{
            navigate('/');
        });
    },[navigate,tk.token]);
    return(
        <>
        <styles.BACKGROUND>
            <TOP>
                <p>Olá, {userdata.name}</p>
                <BoxArrowRight size={25} color="#FFFFFF"/>
            </TOP>
            <REGISTERBOX>
                {userdata.transactions?(userdata.transactions.length>0?userdata.transactions.map((item,index) =>{return <Transaction key={index} name={item.name} date={item.date} value={item.value}/>}):
                <EMPTY>Não há registros de entrada ou saída</EMPTY>):null}
                <TOTAL empty={empty}>
                    <p>SALDO</p>
                   {userdata.total>=0?<POS>{String(userdata.total)}</POS>:<NEG>{String(userdata.total*-1)}</NEG>}    
                </TOTAL>
            </REGISTERBOX>
            <BOTTON>
                <BOTTONBOX onClick={()=>{navigate('/home/new-earn')}}>
                    <PlusCircle size={25}/>
                    <p>Nova entrada</p>
                </BOTTONBOX>
                <BOTTONBOX onClick={()=>{navigate('/home/new-debt')}}>
                    <DashCircle size={25}/>
                    <p>Nova saída</p>
                </BOTTONBOX>
            </BOTTON>
        </styles.BACKGROUND>
        </>
    );
}
const TOP = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    font-size: 26px;
    font-weight: bold;
    color: #FFFFFF;
`;
const BOTTON = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 145px;
    width: 100%;
`;
const BOTTONBOX = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 10px 10px 10px;
    width: calc(50% - 8px);
    height: 115px;
    background-color: #A328D6;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 17px;
    font-weight: bold;
`;
const REGISTERBOX = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: calc(100% - 225px);
    width: 100%;
    padding-bottom: 25px;
    border-radius: 5px;
    background-color: #FFFFFF;
    overflow-y: scroll;
`;
const TOTAL = styled.div`
    position: fixed;
    bottom: 145px;
    z-index: 1;
    display: ${props =>{
        if(props.empty){
            return "none";
        }
        return "flex";
    }};
    justify-content: space-between;
    align-items: flex-start;
    width: calc(100% - 50px);
    height: 25px;
    border-radius: 5px;
    padding: 0 5px 5px 10px;
    background-color: #FFFFFF;
    font-size: 17px;
    font-weight: bold;
`;
const POS = styled.p`
    color: #03AC00;
    font-weight: 400;
    margin-right: 10px;
`;
const NEG = styled.p`
    color: #c70000;
    font-weight: 400;
    margin-right: 10px;
`;
const EMPTY = styled.p`
    text-align: center;
    margin: auto 20% auto 20%;
    color: #868686;
    font-size: 20px;
`;