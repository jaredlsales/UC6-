import {useState, useEffect} from "react"

export default function Dashboard() {

    //Pegando no LocalStorage o nome que estava guaradada e redenezizar no frnt end 
    //fazando do conversao de String para JSON 
    const [nome, setName] = useState("")

    useEffect(() =>{
    const nomeT = localStorage.getItem("@nome")
    //convertando string para JSON (assim ele não vai aparecer as "" no front)
    const nomeP = JSON.parse(nomeT)
    // esse codigo abaixo e pq o setname estava com problema.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setName(nomeP)
    }, [])


    return (
        <>
            <div>
                <h1>Dashboard Funcionarios</h1>
                <h2>Seja Bem Vindo {nome.toUpperCase()}</h2>
            </div>
        </>
    )
}