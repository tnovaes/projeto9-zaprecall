import styled from 'styled-components';
import { useState } from 'react';
import logo from './assets/logo.png'
import setaPlay from './assets/seta_play.png'
import setaVirar from './assets/seta_virar.png'
import certo from './assets/icone_certo.png'
import erro from './assets/icone_erro.png'
import quase from './assets/icone_quase.png'



export default function App() {
  const [aberta, setAberta] = useState(false);
  const [virada, setVirada] = useState(false);
  const [respondida, setRespondida] = useState(false);
  const [icone, setIcone] = useState(setaPlay)
  const vermelho = '#FF3030';
  const amarelo = '#FF922E';
  const verde = '#2FBE34';
  

  function escolherResposta(cor){
    setAberta(false);
    setVirada(false);
    setRespondida(true);
    if(cor === vermelho){
      setIcone(erro);
    } else if(cor === amarelo){
      setIcone(quase);
    } else{
      setIcone(certo);
    }
  }


  return (
    <Tela>
      <Header>
        <img src={logo} alt="logo"/>
        <h1>ZapRecall</h1>
      </Header>
      <Container>
        <CardFechado aberta={aberta}>
          <p>Pergunta 1</p>
          <img src={icone} onClick={() => !respondida && setAberta(true)}/>
        </CardFechado>
        <CardPergunta aberta={aberta} virada={virada}>
          <p>Pergunta</p>
          <img src={setaVirar} onClick={() => setVirada(true)}/>
        </CardPergunta>
        <CardResposta virada={virada}>
          <p>Resposta</p>
          <ContainerBotoes>
            <Botao cor={vermelho} onClick={() => escolherResposta(vermelho)}>Não lembrei</Botao>
            <Botao cor={amarelo} onClick={() => escolherResposta(amarelo)}>Quase não lembrei</Botao>
            <Botao cor={verde} onClick={() => escolherResposta(verde)}>Zap!</Botao>
          </ContainerBotoes>
        </CardResposta>
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
const CardFechado = styled.div`
  width:300px;
  height:65px;
  padding:15px;
  background:#FFFFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display:${props => props.aberta ? 'none' : 'flex'};
  align-items: center;
  justify-content: space-between;
  margin-bottom:25px;
`
const CardPergunta = styled.div`
  width:300px;
  height:131px;
  padding:15px;
  background:#FFFFD4;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-bottom:25px;
  position: relative;
  img{
    width:30px;
    height:20px;
    position: absolute;
    bottom: 8px;
    right: 15px;
  }
  display:${props => props.aberta ? (props.virada ? 'none' : 'flex') : 'none'};
`

const CardResposta = styled.div`
  width:300px;
  height:131px;
  padding:15px;
  background:#FFFFD4;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-bottom:25px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  display:${props => props.virada ? 'flex' : 'none'};
  
`

const ContainerBotoes = styled.div`
  display:flex;
  justify-content: space-between;
`
const Botao = styled.button`
  width:85px;
  border: 1px solid;
  border-radius:5px;
  color:#FFFFFF;
  background-color: ${props => props.cor};
  display:flex;
  align-items: center;
  justify-content: center;
  padding:5px;

`