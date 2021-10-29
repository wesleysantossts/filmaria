import './filmes.css';
// useParams - usado para colocar os parametros de rota e utiliza-los no código
import { useParams } from 'react-router-dom';

export default function Filme(){
    const { id } = useParams();

    return(
        <div>
            <h1>Filmes - {id} </h1>
        </div>
    )
};