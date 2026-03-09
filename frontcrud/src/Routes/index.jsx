import React, {useContext} from "react"
import {AutenticadoContexto} from "../Contexts/AuthContexts"

import NAutenticados from "./nAutenticados.routes"
import Autenticados from "./autenticados.routes"


//index vai direcionar para onde vai
export default function Rotas() {

    const {autenticado} = useContext(AutenticadoContexto)
    return (
        autenticado === true ? <Autenticados /> : <NAutenticados />
    )
}