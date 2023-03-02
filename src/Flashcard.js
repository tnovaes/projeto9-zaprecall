import { useState } from 'react';
import styled from 'styled-components';
import setaPlay from './assets/seta_play.png';
import setaVirar from './assets/seta_virar.png';
import certo from './assets/icone_certo.png';
import erro from './assets/icone_erro.png';
import quase from './assets/icone_quase.png';

export default function Flashcard({ question, answer, indice, placar, setPlacar }) {
    const [aberta, setAberta] = useState(false);
    const [virada, setVirada] = useState(false);
    const [respondida, setRespondida] = useState(false);
    const [icone, setIcone] = useState(setaPlay);
    const [corTexto, setCorTexto] = useState('#333333');
    const vermelho = '#FF3030';
    const amarelo = '#FF922E';
    const verde = '#2FBE34';

    function escolherResposta(cor) {
        setAberta(false);
        setVirada(false);
        setRespondida(true);
        const novoPlacar = placar + 1;
        setPlacar(novoPlacar);
        if (cor === vermelho) {
            setIcone(erro);
            setCorTexto(vermelho)
        } else if (cor === amarelo) {
            setIcone(quase);
            setCorTexto(amarelo)
        } else {
            setIcone(certo);
            setCorTexto(verde)
        }
    }

    return (
        <div data-test="flash-card">
            <CardFechado aberta={aberta} respondida={respondida} corTexto={corTexto}>
                <p data-test="flashcard-text">Pergunta {indice}</p>
                <img data-test="play-btn" src={icone} onClick={() => !respondida && setAberta(true)} />
            </CardFechado>
            <CardPergunta aberta={aberta} virada={virada}>
                <p data-test="flashcard-text">{question}</p>
                <img data-test="turn-btn" src={setaVirar} onClick={() => setVirada(true)} />
            </CardPergunta>
            <CardResposta virada={virada}>
                <p data-test="flashcard-text">{answer}</p>
                <ContainerBotoes>
                    <Botao data-test="no-btn" cor={vermelho} onClick={() => escolherResposta(vermelho)}>Não lembrei</Botao>
                    <Botao data-test="partial-btn" cor={amarelo} onClick={() => escolherResposta(amarelo)}>Quase não lembrei</Botao>
                    <Botao data-test="zap-btn" cor={verde} onClick={() => escolherResposta(verde)}>Zap!</Botao>
                </ContainerBotoes>
            </CardResposta>
        </div>
    );
}

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
  p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.corTexto};
    text-decoration: ${props => props.respondida ? 'line-through' : 'none'}
  }
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
  p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
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
  min-height:131px;
  gap:15px;
  padding:15px;
  background:#FFFFD4;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-bottom:25px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
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