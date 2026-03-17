import {useState, useContext, useEffect} from "react"
import apiLocal from "../api/apiLocal"
import {AutenticadoContexto} from "../Contexts/AuthContexts"


export default function VisualizarProdutos() {

    const {verificaToken, token} = useContext(AutenticadoContexto)
    verificaToken()
    

    //vai receber um array com os dados 
    const [recebeDados, setRecebeDados] = useState([""])

    useEffect(() => {
        async function receberDados() {
            try {
                const resposta = await apiLocal.get("/VisualizarProdutos",
                    {
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    })
                //console.log(resposta)
                setRecebeDados(resposta.data)
            } catch (err) {
                console.log(err)
            }
        }
        receberDados()
    }, [])

    return(
        <>
        <div>
            <h1>VisualizarProdutos </h1>
            {recebeDados.map((item) => {
                return(

                    <div key={item.id}>
                        <img
                        src={`http://localhost:3333/files/${item.banner}`} /> <br/>
                        <span>{item.nome}</span> <br/>
                        <span>{item.preco}</span> <br/>
                    </div>
                )
            })}
        </div>
        </>
    )
}