import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais/Index";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";

import fotos from "./fotos.json";
import { useEffect, useState } from "react";
import ModalZoom from "./componentes/ModalZoom";
import Rodape from "./componentes/Rodape";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  padding: 0 24px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [tagSelecionada, setTagSelecionada] = useState(null);
  const [texto, setTexto] = useState("");

  useEffect(() => {
    if (tagSelecionada) {
      const fotosFiltradas = fotos.filter(
        (foto) => foto.tagId === tagSelecionada
      );
      setFotosDaGaleria(fotosFiltradas);
    } else {
      setFotosDaGaleria(fotos);
    }
  }, [tagSelecionada]);

  useEffect(() => {
    const fotosFiltradas = fotos.filter((foto) =>
      foto.titulo.toLowerCase().includes(texto.toLowerCase())
    );
    setFotosDaGaleria(fotosFiltradas);
  }, [texto]);

  const aoTextoDigitado = (novoTexto) => {
    setTexto(novoTexto);
  };

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      });
    }
    setFotosDaGaleria(
      fotosDaGaleria.map((fotosDaGaleria) => {
        return {
          ...fotosDaGaleria,
          favorita:
            fotosDaGaleria.id === foto.id
              ? !foto.favorita
              : fotosDaGaleria.favorita,
        };
      })
    );
  };

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer data-testid="AppContainer">
        <Cabecalho aoTextoDigitado={aoTextoDigitado} />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              backgroundImage="/imagens/banner.png"
              texto="A galeria mais completa de fotos do espaço!"
            />
            <Galeria
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              aoTagSelecionada={setTagSelecionada}
              fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <Rodape />
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  );
};

export default App;
