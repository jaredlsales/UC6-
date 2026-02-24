import NAutenticados from "./nAutenticados.routes"
import Autenticados from "./autenticados.routes"


//index vai direcionar para onde vai
export default function Rotas() {

    const autenticado = false
    return (
        autenticado === true ? <Autenticados /> : <NAutenticados />
    )
}