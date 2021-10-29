import './erro.css';
import {Link} from 'react-router-dom';

export default function Erro(){
    return(
        <div id='not-found'>
            <h1>404</h1>
            <h2>Página não encontrada.</h2>
            <Link to='/'>Ver todos os filmes!</Link>
        </div>
    )
}