import styled from "styled-components";

const RodapeEstilizado = styled.footer`
  background-color: #04244f;
  color: #ffffff;
  width: 100%;
  height: 80px;
  padding: 0 46px;
  margin-top: 73px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    gap: 34px;
  }
`;

const Rodape = () => {
  const iconesSociais = [
    {
      src: "./imagens/sociais/facebook.png",
      alt: "Ícone perfil Alura Facebook",
      url: "https://www.facebook.com/AluraCursosOnline",
    },
    {
      src: "./imagens/sociais/instagram.png",
      alt: "Ícone perfil Alura Instagram",
      url: "https://www.instagram.com/aluraonline",
    },
    {
      src: "./imagens/sociais/twitter.png",
      alt: "Ícone perfil Alura Twitter",
      url: "https://twitter.com/aluraonline",
    },
  ];

  return (
    <RodapeEstilizado>
      <div>
        {iconesSociais.map((icone, index) => (
          <a
            key={index}
            href={icone.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icone.src} alt={icone.alt} />
          </a>
        ))}
      </div>
      <p>Desenvolvido por Alura.</p>
    </RodapeEstilizado>
  );
};

export default Rodape;
