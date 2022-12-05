import React,{useState, useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getWinner } from '../services/recommendations.services';


const Winner = () => {

    const [winnerTitle,setWinnerTitle]=useState();
    const [winnerId,setWinnerId] = useState();
    const {id} =useParams()
    const navigate = useNavigate();


    const getWinnerFromService = async () =>{
        const winner = await getWinner(id);
        const winnerTitle = winner.data.title ;
        const winnerId = winner.data._id;
        setWinnerTitle(winnerTitle);
        setWinnerId(winnerId);
    };


    const toEvaluation = () =>{
        navigate(`/evaluation/${id}`)
    }

    useEffect(() => {
        getWinnerFromService();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='container card w-50 text-white bg-dark mt-5 shadow-lg p-3 mb-5 rounded'>
                <h1>¡La película ganadora es!</h1>
                {winnerTitle ? 
                <div className='container card-body rounded'>
                        <h1 className='display-4'>{winnerTitle}</h1>
                        <button className='btn btn-outline-light m-3' onClick={toEvaluation}>colocar nota</button>
                </div> : null}
            </div>
            
        </div>
    );
}

export default Winner;
