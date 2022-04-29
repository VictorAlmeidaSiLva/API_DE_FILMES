import React, { useEffect, useState } from "react"
import api from "../services/api"

function Body(){
    const [filmes, setFilmes] = useState([])
    
    useEffect(() => {
        async function loadfilmes() {
            const response = await api.get('/movie/now_playing',{
                params: {
                    api_key: 'bb59964b87f2eedfcd551019b2daba38',
                    language: 'pt-BR'
                }
            })
            setFilmes(response.data.results)
        }
        loadfilmes()
    }, [])  


    return (
        <div className="row corpo">
            <div className="col-4">

            </div>
            <div className="col-4">
                <h2 className="subTitulo">Filmes</h2>
                {filmes.map((filmes) => {
                    return(
                        <article>
                            <strong>{filmes.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/w500/`+ filmes.poster_path}></img>
                        </article>
                    )
                })}

            </div>
            <div className="col-4">

            </div>
        </div>
    )
}

export default Body