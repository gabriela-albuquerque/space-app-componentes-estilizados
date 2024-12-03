import styled from "styled-components";
import BotaoIcone from "../../BotaoIcone";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "1156px" : "448px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 16px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Imagem = ({
  refFoto,
  expandida = false,
  aoZoomSolicitado,
  aoAlternarFavorito,
}) => {
  return (
    <Figure $expandida={expandida}>
      <img src={refFoto.path} alt={refFoto.titulo} />
      <figcaption>
        <h3>{refFoto.titulo}</h3>
        <footer>
          <h4>{refFoto.fonte}</h4>
          <BotaoIcone onClick={() => aoAlternarFavorito(refFoto)}>
            <img src="/icones/favorito.png" alt="Icone de favorito" />
          </BotaoIcone>
          {!expandida && (
            <BotaoIcone
              aria-hidden={expandida}
              onClick={() => aoZoomSolicitado(refFoto)}
            >
              <img src="/icones/expandir.png" alt="Icone de expandir" />
            </BotaoIcone>
          )}
        </footer>
      </figcaption>
    </Figure>
  );
};
export default Imagem;
