import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/api';
import './home.css';

export default function App() {
  const [ filmes, setFilmes ] = useState([]);

  useEffect(()=>{
    async function carregarDados(){
      const res = await api.get('r-api/?api=filmes')
      setFilmes(res.data)
    }
    carregarDados()
  }, [])

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
          <article key={filme.id}>
            <strong>{filme.nome}</strong>  
            <p>{filme.sinopse}</p>  
            <img src={filme.foto} alt={filme.nome}/>
            <Link to={`/filme/${filme.id}`}>Acessar</Link>  
          </article>
          )
        })}
      </div>
    </div>
  );
}