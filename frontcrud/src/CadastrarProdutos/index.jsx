import { Container, Form, Button, Image } from 'react-bootstrap';
import { useState, useContext } from "react"
import { Link } from 'react-router-dom';
import { AutenticadoContexto } from '../Contexts/AuthContexts';
import apiLocal from '../api/apiLocal';

export default function CadastrarProdutos() {

    const {verificaToken} = useContext(AutenticadoContexto)
    verificaToken()

    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")
    const [file, setFile] = useState(false)

    //e.preventDefault = ele protege o que foi escrito no formulario e não apaga o campo 
    async function pegarImagem(e) {
        if(!e.target.files){
            return
        }

        const image = e.target.files[0]
        if (image.type === "image/jpeg" || image.type === "image/jpg" || image.type === "image/png"){
            setFile(image)
        }
    }

    async function cadastrarProdutos(e) {
        //Esta faltando somente o verifica token (no back-end nao tem no /CadastrarProdutos)
        try {
             e.preventDefault()
             const data = new FormData()
             //Encapsolomento = "nome", nome (backend - o outro que está na cosnt)
             data.append("nome", nome)
             data.append("preco", preco)
             data.append("file", file)
             const resposta = await apiLocal.post("/CadastrarProdutos",
                 data)
            console.log(resposta)
        } catch (err) {
            console.log(err)
        }
        
    }



    return (

        <div className="w-100" style={{ maxWidth: '330px', padding: '15px' }}>
            <Form onSubmit={cadastrarProdutos} className="text-center">
                <h1 className="h3 mb-3 fw-normal">Faça seu Cadastro de Produto</h1>
                
                <Form.Group className="form-floating mb-2" controlId="floatingInput">
                    <Form.Control type="text" placeholder="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <Form.Label>Nome: </Form.Label>
                </Form.Group>

                <Form.Group className="form-floating mb-3" controlId="floatingPassword">
                    <Form.Control type="text" placeholder="preco" value={preco} onChange={(e) => setPreco(e.target.value)} />
                    <Form.Label>Preço: </Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="inputBanner">
                    <Form.Label>Banner:</Form.Label>
                    <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={pegarImagem}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 py-2 mb-3">
                    Enviar
                </Button>

                {/* Adicionando o Link aqui */}
                <div className="mt-3">
                    <Link to="/" className="text-decoration-none">
                        Voltar para a Página Inicial
                    </Link>
                </div>

                <p className="mt-5 mb-3 text-body-secondary">&copy; 2026</p>
            </Form>
        </div>
    );

}