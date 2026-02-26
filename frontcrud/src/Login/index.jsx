import { Container, Form, Button, Image } from 'react-bootstrap';

export default function Login() {
  return (
    /* Centraliza o formulário na tela vertical e horizontalmente */
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <div className="w-100" style={{ maxWidth: '330px', padding: '15px' }}>
        
        <Form className="text-center">

          <h1 className="h3 mb-3 fw-normal">Por favor, faça login</h1>
          <Form.Group className="form-floating mb-2" controlId="floatingInput">
            <Form.Control type="email" placeholder="nome@exemplo.com" />
            <Form.Label>E-mail</Form.Label>
          </Form.Group>

          <Form.Group className="form-floating mb-3" controlId="floatingPassword">
            <Form.Control type="password" placeholder="Senha" />
            <Form.Label>Senha</Form.Label>
          </Form.Group>

          <Form.Check 
            type="checkbox" 
            label="Lembrar de mim" 
            className="mb-3 d-flex justify-content-start" 
          />

          <Button variant="primary" type="submit" className="w-100 py-2">
            Entrar
          </Button>
          
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2026</p>
        </Form>
      </div>
    </Container>
  );
};
