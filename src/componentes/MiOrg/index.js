import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks Funcionalidades que nos ayudan a trabajar el comportmiento de react
    //useState
    //useState()
    //const [nombreVariable, funcionActualiza] = useState(ValorInicial)
    console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true)

    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
    <h3 className="title">Mi Organización</h3>
    <img src="/images/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg