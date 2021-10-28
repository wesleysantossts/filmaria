import { useEffect, useState } from 'react';
import api from '../../services/api';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [ filmes, setFilmes] = useState([]);
  
  useEffect(()=>{
    
    async function loadFilmes(){
        const response = await api.get('r-api/?api=filmes')
        // console.log(response.data);
        setFilmes(response);
    }

    loadFilmes()

  }, []);

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme)=>{
          return(
            <article key={filme.id}>
                <strong> {filme.nome} </strong>
                <img src={filme.foto} alt={filme.nome} />
                <Link to="/">Acessar</Link>
            </article> 
          )
        })}
      </div>
    </div>
  );
};

export default Home;