import Formulario from "./Formulario"
import Alerta from "./Alerta"
import Letra from "./Letra"
import useLetras from "../hooks/useLetras"
import Spinner from "./Spinner"

const AppLetras = () => {

  const {alerta,letra,cargando} = useLetras()

  return (
    <>
        <header>Buqueda De letras de canciones</header>

        <Formulario/>

        <main>
            {alerta ? <Alerta>{alerta}</Alerta> : 
             letra ? <Letra/> : 
             cargando ? <Spinner/> :
             <p className="text-center">Busca letras de tus artistas favoritos</p>}
        </main>
    </>
  )
}

export default AppLetras