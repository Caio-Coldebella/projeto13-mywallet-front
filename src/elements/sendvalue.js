import dayjs from "dayjs";
import axios from "axios";

export default function sendvalue(value,setDisable,description,navigate,tk,route){    
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
    const promisse = axios.post(`http://localhost:5000/home/${route}`,objpost,{headers:{Authentication:tk.token}});
    promisse.then(() => {navigate("/home");})
    promisse.catch((res)=> {
        if(res.response.status === 400){
            alert("Preencha os campos valor e descrição");
        }else if(res.response.status === 500){
            navigate('/');
        }
        setDisable(false);});
}