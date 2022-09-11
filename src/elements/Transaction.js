import styled from "styled-components";

export default function Transaction({name,date,value}){
    let pos = true;
    if(value < 0){
        pos = false;
        value *= -1;
    }
    return(
        <>
        <BOX>
            <DATE>{date}</DATE>
            <NAME>{name}</NAME>
            {pos?<POS>{String(value)}</POS>:<NEG>{String(value)}</NEG>}
        </BOX>
        </>
    );
}
const BOX = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    border: 1px solid #FFFFFF;
    width: 100%;
    font-size: 16px;
    margin: 5px 0 15px 0;
`;
const NAME = styled.p`
    color: #000000;
`;
const DATE = styled.p`
    color: #C6C6C6;
    margin: 0 10px 0 10px;
`;
const POS = styled.p`
    color: #03AC00;
    margin-right: 10px;
`;
const NEG = styled.p`
    color: #c70000;
    margin-right: 10px;
`;