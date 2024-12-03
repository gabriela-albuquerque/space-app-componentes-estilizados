import styled from "styled-components";
import Titulo from "../../Titulo";

import fotos from "./fotos-populares.json";

const ColunaFotos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Imagem = styled.img`
  max-width: 212px;
  height: 158;
  border-radius: 20px;
`;

const Botao = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid #c98cf1;
  padding: 14px 29px;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 24px;
`;

const Populares = () => {
  return (
    <section>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ColunaFotos>
        {fotos.map((foto) => (
          <Imagem key={foto.id} src={foto.path} alt={foto.alt} />
        ))}
      </ColunaFotos>
      <Botao>Ver mais</Botao>
    </section>
  );
};

export default Populares;
