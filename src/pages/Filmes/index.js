import './filmes.css';
// useParams - usado para colocar os parametros de rota e utiliza-los no código
// useHistory - usado para redirecionar o usuário para outra página quando ele tentar acessar de um ID que não existe
import { useParams, useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react';
import api from '../../service/api';


export default function Filme(){
    // id - para poder puxar o id da página, devo instanciar esse id, acrescentar ele na rota dentro do useEffect e executar o useEffect apos ele ser carregado
    const { id } = useParams();
    const history = useHistory();
    const [ filme, setFilme ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            const res = await api.get(`r-api/?api=filmes/${id}`);

            if(res.data.length == 0){
                // Tentou acessar com ID que não existe, navego ele para a Home!
                    // replace - usado para trocar a rota
                history.replace('/')
            }
            setFilme(res.data);
            console.log(res.data);
            setLoading(false)
        };

        loadFilme();

        // Colocando o return, tenho um efeito como se fosse o "ComponentWillUnmount", isto é, toda vez que o saio da pagina (nesse caso) aparecerá o que eu colocar dentro do return porque o componente será desmontado
        return () => { console.log('COMPONENTE DESMONTADO') }

        // o "history, id" devem ser passados entre colchetes após a função do useEffect porque eles devem ser executados primeiro antes da função do useEffect ser executada (efeito ComponentDidUpdate)
    }, [history, id]);

    
    if(loading){
        return(
            <div className="filme-info">
                <h2>Carregando página...</h2>
            </div>
        )
    }

    return(
        <div className="filme-info">
                <h2> {filme.nome} </h2>
                <img src={filme.foto} alt={filme.nome} />
                
                <h3>Sinopse</h3>
                <p>{filme.sinopse}</p>

                <div className="botoes">
                    <button onClick={()=>{}}>Salvar</button>
                    <button>
                        {/* target='blank' - usado para abrir o link em outra aba no navegador */}
                        <a target='blank' href={`https://www.youtube.com/results?search_query=${filme.nome} trailer`}>Trailer</a>
                    </button>
                </div>

        </div>
    )
};