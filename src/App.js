import styled from 'styled-components';
import { useState } from 'react';
import logo from './assets/logo.png';
import Flashcard from './Flashcard';


export default function App() {
  
  const [placar, setPlacar] = useState(0);

  const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ];

  return (
    <Tela>
      <Header>
        <img src={logo} alt="logo" />
        <h1>ZapRecall</h1>
      </Header>
      <Container>
        {cards.map((p,i) => <Flashcard data-test="flash-card" question={p.question} answer={p.answer} indice={i+1} placar={placar} setPlacar={setPlacar} />)}
      </Container>
      <Footer data-test="footer">
        {placar}/{cards.length} Conclúidos
      </Footer>
    </Tela>
  );
}

const Tela = styled.div`
  width:100vw;
  display:flex;
  flex-direction:column;
  align-items: center;
  background-color: #FB6B6B;
`

const Header = styled.div`
  width:100%;
  height: 100px;
  display:flex;
  align-items: center;
  justify-content: center;
  position:fixed;
  left:0;
  padding-top:48px;
  gap:20px;
  img{
    width:52px;
    height:60px;
  }
  h1{
    height:44px;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color:#FFFFFF;
  }
  z-index: 1;
  background-color: #FB6B6B;
`

const Container = styled.div`
  margin-top:153px;
  margin-bottom: 109px;
  overflow-y: hidden;
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
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`