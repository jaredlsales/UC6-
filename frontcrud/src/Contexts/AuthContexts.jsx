import {createContext, useState} from "react"
import apiLocal from "../api/apiLocal"

//vai estanciar filho e pai, todas as funcionares da biblloteca createContext vai ficar nessa const AutenticadoContexto

// eslint-disable-next-line react-refresh/only-export-components
export const AutenticadoContexto = createContext()
//ele estava tanto um erro entao seleciou com o mause e ele fez essa linha de codigo assim parando o erro.

export default function AuthProvider({children}) {
    //e uma função Provider junto com o AutenticadoContexto (Provider uma função de inglobar(enxcaixodar) todas as função, assim ele consegue receber usar em toda a aplicação)
    // estado de autenticação globalmente, permitindo que componentes filhos acessem dados do usuário logado (como token, nome ou booleanos de autenticação)
    // tudo que tem dentro do <AutenticadoContexto.Provider> são filhos.

    //tokenT (veredadeiro ou não)
    //token (backend)
    //!! (cada um ! e diferente)
    //!! é uma dupla negação. Ele serve para converter qualquer valor para um booleano (true ou false) de forma explícita:
    //O primeiro ! (negação) transforma o valor em true/false invertendo a “verdade” dele.
    //O segundo ! inverte de novo, voltando ao sentido original — mas agora como um booleano real.
    //const [tokenT, setTokenT] = useState(false) começa como false ele muda para true e volta para false de novo.

    const [tokenT, setTokenT] = useState(false)
    const [token, setToken] = useState("")

    const autenticado = !!tokenT

    async function LoginFuncionarios (email,senha) {
        try {
            const resposta =  await apiLocal.post("/LoginFuncioarios",{
                email,
                senha
            })
            //transforma essa chave em string / reposta do LoginFuncionarios / data dentro do arquivo JSON do console ele aparece
            //ta para colocar vararios o id e o nome e mais de exemplo talvez em uma app real nao colocar. 
            localStorage.setItem("@id", JSON.stringify(resposta.data.id))
            localStorage.setItem("@nome", JSON.stringify(resposta.data.nome))
            localStorage.setItem("@email", JSON.stringify(resposta.data.email))
            localStorage.setItem("@token", JSON.stringify(resposta.data.token))
            setTokenT(true)

        } catch (err) {
            console.log(err.response.data.error)
        }
    }

    async function verificaToken () {
        const iToken = localStorage.getItem("@token")
        if(!iToken){
            setTokenT(false)
            //return e para eão contuinuar fazer as autenticaficação
            return
        }

        //convertento String para JSON o token -- tokenU e eum nome generico
        const tokenU = JSON.parse(iToken)
        setToken(tokenU)

        try {
            const resposta =  await apiLocal.get("/VerificaToken", {
                headers:{
                    // Bearer e o nome do JSON que está no insominia
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(resposta)
        } catch (err) {
            console.log(err)
        }

    }

    return(
        // exportar value={({LoginFuncionarios})}
        <AutenticadoContexto.Provider value={({LoginFuncionarios, autenticado, verificaToken})}>
            {children}
        </AutenticadoContexto.Provider>
    )
}
