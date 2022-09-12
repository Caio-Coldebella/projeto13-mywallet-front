import styled from "styled-components";

const BACKGROUND = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    padding: 0 25px 0 25px;
    background-color: #8C11BE;
`;
const LOGO = styled.img`
    width: auto;
    height: auto;
    margin-bottom: 35px;
`;
const FORM = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 10px;
    margin-bottom: 35px;
`;
const INPUT = styled.input`
    height: 60px;
    width: 100%;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    padding-left: 10px;
    background-color: #FFFFFF;
    &::placeholder{
        color: #000000;
        font-size: 20px;
    }
`;
const BUTTON = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
    background-color: #A328D6;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
    &:hover{
        cursor: pointer;
    }
`;
const LINK = styled.p`
    font-size: 15px;
    font-weight: bold;
    color: #FFFFFF;
    &:hover{
        cursor: pointer;
    }
`;
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
const styles = {
    BACKGROUND: BACKGROUND,
    LOGO: LOGO,
    FORM: FORM,
    INPUT: INPUT,
    BUTTON: BUTTON,
    LINK: LINK,
    TOP: TOP
}
export default styles;