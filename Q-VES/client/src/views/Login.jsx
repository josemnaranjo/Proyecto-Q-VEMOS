import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { login } from '../services/user.services';

const Login = () => {
    const [errors,setErrors] = useState([]);
    const navigate = useNavigate();

    const loginToWeb = async(values) =>{
        console.log("LOGIN VIEW - LINEA 11", values);

        const response = await login(values);
        

        if(response.data.message===""){
            console.log("LOGIN VIEW - LINEA 17", response);
            navigate('/');

        }else{
            const errorResponse = response.data.errors;
            const errorArr =[];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        }

    }
    return (
        <div>
            {errors?.map((err,i)=>(<div key={i}>{err}</div>))}
            <LoginForm email="" password="" onSubmitProp={loginToWeb}/>
        </div>
    );
}

export default Login;
