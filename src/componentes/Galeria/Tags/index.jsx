import styled from "styled-components";
import tags from "./tags.json";

const AreaTags = styled.div`
  display: flex;
  justify-content: space-between;
  width: 850px;
  height: 49px;
  margin-top: 56px;
  align-items: center;
`;

const ContainerTags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  line-height: 29px;
  font-weight: 400;
  margin: 0;
  white-space: nowrap;
`;

const BotaoEstilizado = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = ({ aoTagSelecionada }) => {
  return (
    <AreaTags>
      <TagTitulo>Busque por tags:</TagTitulo>
      <ContainerTags>
        {tags.map((tag) => (
          <BotaoEstilizado
            key={tag.id}
            onClick={() => aoTagSelecionada(tag.id)}
          >
            {tag.titulo}
          </BotaoEstilizado>
        ))}
      </ContainerTags>
    </AreaTags>
  );
};

export default Tags;
