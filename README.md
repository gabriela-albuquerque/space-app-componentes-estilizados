# SpaceApp 🚀

SpaceApp é uma aplicação React desenvolvida durante um curso para explorar o uso de **styled-components**, manipulação de arquivos estáticos e boas práticas em React. A aplicação exibe uma galeria de fotos do espaço, permitindo filtragem por texto e por tags, além de marcar favoritos e ampliar imagens como um zoom.

## Funcionalidades 🖼️

1. **Busca por texto**: Filtra as imagens na galeria conforme o usuário digita no campo de busca.
2. **Filtragem por tags**: Permite selecionar fotos com base em categorias predefinidas.
3. **Favoritos**: O usuário pode marcar ou desmarcar fotos como favoritas.
4. **Zoom em imagens**: Modal para visualização ampliada das fotos.

## Estrutura do Projeto 📂

### Principais Componentes

- **`App.jsx`**: Componente principal que gerencia o estado global da aplicação, incluindo as fotos filtradas, seleção de tags e texto buscado.
- **`Cabecalho`**: Inclui o campo de busca estilizado com um ícone de lupa.
- **`Galeria`**: Renderiza as fotos filtradas, integrando os componentes de tags e imagens populares.
- **`Imagem`**: Exibe as fotos com informações e botões de ação (favoritar e ampliar).
- **`ModalZoom`**: Modal para exibir imagens em tamanho maior.
- **`Rodape`**: Rodapé estilizado para finalizar a interface.

### Styled Components

Os **styled-components** foram amplamente utilizados para criar estilos modulares e reaproveitáveis.

O que Aprendi 💡

Styled-components: Criação de componentes estilizados.
Utilização de propriedades dinâmicas para alterar estilos com base em condições.
Manipulação de estado:
Gerenciamento de estados com useState e efeitos colaterais com useEffect.
Implementação de filtros dinâmicos por texto e categorias.
Componentização:
Organização de código em componentes reutilizáveis.
Criação de componentes funcionais e suas propriedades (props).
Modal e Interação:
Uso de modais para exibição de conteúdo em destaque.
Gerenciamento de ações como favoritar e ampliar imagens.

Projeto desenvolvido como parte de um curso de React. 🌌
