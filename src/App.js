import logo from './assets/logo.png'
import styled from 'styled-components';

export default function App() {
  return (
    <Tela>
      <Header>
        <img src={logo} alt="logo"/>
        <h1>ZapRecall</h1>
      </Header>
      <Container>
        <div className="Pergunta">
          Pergunta 1
        </div>
        <div className="Pergunta">
          Pergunta 2
        </div>
      </Container>
      <Footer>
        0/4 Concluídos
      </Footer>
    </Tela>
  );
}

const Tela = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items: center;
  background-color: #FB6B6B;
`

const Header = styled.div`
  width:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  position:fixed;
  top:48px;
  left:0;
  gap:20px;
  img{
    width:52px;
    height:60px;
  }
  h1{
    height:44px;
    font-size:36px;
  }
`

const Container = styled.div`
  height:700px;
  margin-top:153px;
`

const Footer = styled.div`
  width:100vw;
  height:70px;
  position:fixed;
  bottom:0;
  right:0;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
`
