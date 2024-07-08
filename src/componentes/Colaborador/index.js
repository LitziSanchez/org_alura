import { RiHomeHeartFill } from "react-icons/ri";
import "./colaborador.css"
import { IoIosCloseCircle} from "react-icons/io";
import { GoHeartFill, GoHeart } from "react-icons/go";


const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props

    const Background = {
        backgroundColor: colorPrimario
    }
    
   return <div className="colaborador">
    <IoIosCloseCircle onClick={()=> eliminarColaborador(id)} className="eliminar" />
        <div className="encabezado" style={Background}>
            <img src={foto}  alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ?  <GoHeartFill color= "red" onClick={() => like(id)} /> :  <GoHeart onClick={() => like(id)} /> }
           
        </div>
    </div>
}

export default Colaborador