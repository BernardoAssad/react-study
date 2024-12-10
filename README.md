npx expo install expo-font @expo-google-fonts/{NOME_DA_FONTE}


Como o Stack sabe o que chamar?
Estrutura Baseada em Arquivos:

O expo-router segue uma convenção de pastas e arquivos, similar ao Next.js, onde:
O arquivo _layout.js ou _layout.tsx serve como componente de layout principal para todas as rotas dentro da mesma pasta.
Arquivos com nomes como index.tsx ou outros nomes dentro da pasta representam rotas específicas.
Neste caso, o Layout funciona como o layout para todas as rotas e é carregado antes do arquivo index.tsx.
Processo de Carregamento:

Quando o aplicativo é iniciado, o Expo Router busca o arquivo _layout.tsx na pasta atual como ponto de partida para a navegação.
O componente Stack no layout determina como as telas dentro dessa pasta (como index.tsx) serão renderizadas e navegadas.
Navegação Automática:

Dentro de um Stack, o Expo Router mapeia os arquivos automaticamente:
O arquivo index.tsx é mapeado como a rota padrão da pasta.
Se houvesse um arquivo about.tsx, por exemplo, ele seria mapeado como a rota /about.
Por que index.tsx é chamado depois?

O Expo Router renderiza a árvore de navegação em ordem:
Primeiro, carrega o layout global definido no _layout.tsx.
Depois, carrega a tela correspondente à rota atual, que no caso inicial é index.tsx.
Exemplo de Funcionamento
Estrutura de arquivos:

pages/
  _layout.tsx
  index.tsx
  about.tsx
Comportamento:

Ao acessar /, o _layout é carregado primeiro, e dentro dele o arquivo index.tsx é renderizado.
Ao acessar /about, o _layout ainda é carregado primeiro, mas dentro dele o arquivo about.tsx é renderizado.
Resumo
O Stack sabe chamar o index.tsx porque:

O arquivo _layout.tsx é reconhecido como o layout global pelo Expo Router.
O Expo Router usa a estrutura de arquivos para determinar as rotas.
O componente Stack gerencia a navegação entre essas rotas, carregando index.tsx como a rota padrão da pasta.