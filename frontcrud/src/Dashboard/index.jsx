import {useState, useEffect, useContext} from "react"
import {AutenticadoContexto} from "../Contexts/AuthContexts"

export default function Dashboard() {

    //Pegando no LocalStorage o nome que estava guaradada e redenezizar no frnt end 
    //fazando do conversao de String para JSON 
    const [nome, setName] = useState("")

    const {verificaToken} = useContext(AutenticadoContexto)
    verificaToken()

    useEffect(() =>{
    const nomeT = localStorage.getItem("@nome")
    //convertando string para JSON (assim ele não vai aparecer as "" no front)
    const nomeP = JSON.parse(nomeT)
    // esse codigo abaixo e pq o setname estava com problema.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setName(nomeP)
    }, [])




    function sairSistema() {
        localStorage.clear()
        verificaToken()
        //verificaToken vai analisar e ver que não tem e assim sair da pagina
        //localStorage.removeItem() para apagar somente o que vc desejsar
    }


    return (
        <>
            <div>
                <h1>Dashboard Funcionarios</h1>
                <h2>Seja Bem Vindo {nome.toUpperCase()}</h2>
                <button type="button" class="btn btn-outline-primary me-2" onClick={(sairSistema)}>Out-Sair</button>
            </div>
        </>
    )
}