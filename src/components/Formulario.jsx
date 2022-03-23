import {useState} from 'react'
import useLetras from '../hooks/useLetras'

const Formulario = () => {

    const [busqueda,setBusqueda] = useState({
        artista:'',
        cancion:''
    })

    const {setAlerta,busquedaLetra} = useLetras()

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('Coloca nombre de artista y cancion')
            return
        }
        busquedaLetra(busqueda)
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <legend>Busca por artistas y cancion</legend>
        <div className='form-grid'>
            <div>
                <label>Artista</label>
                <input type="text" 
                       name='artista' 
                       placeholder='Nombre de artista'
                       value={busqueda.artista}
                       onChange={e => setBusqueda({
                           ...busqueda,
                           [e.target.name] : e.target.value
                       })}/>
            </div>
            <div>
                <label>Cancion</label>
                <input type="text" 
                       name='cancion' 
                       placeholder='Nombre de la cancion'
                       value={busqueda.cancion}
                       onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}/>
            </div>

            <input type="submit" value="buscar" />

        </div>
      

    </form>
  )
}

export default Formulario