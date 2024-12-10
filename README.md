node permite uso do js fora do navegador
typescript tem tipagem, interfaces
react usa o node

React native, conseguimos criar app nativos para Android, iOS, Desktop, Smartwatch, entre outros. Ele é uma "extensão" do React, ou seja, criamos as interfaces usando uma sintaxe declarativa, onde declaramos o que queremos e ele será renderizado nativamente de acordo com o ambiente.

Usamos JavaScript como linguagem e a sintaxe JSX para criar as interfaces de forma declarativa, parecido com html, com tags entre outros. Trabalhamos também com componentização, ajuda na manutenção, organização etc

A grande vantagem do react native é ter uma única code base para cuidar e desenvolver e distribuir para quaisquer ambientes, por meio de bundles, empacotando e entregando para os diversos ambientes e renderizando de forma nativa. Diferentemente se codarmos em Kotlin, que é só para android, depois teríamos que usar SWIFT por exemplo, para usar em iOS. E por mais que seja uma única code base, conseguimos personalizar bem o ambiente pro android e pro ios, usando funções nativas de cada ambiente.

A vantagem de usar kotlin ou SWIFT é que o desempenho é melhor, pois são diretamente compilados para o código nativo do sistema operacional. Não há necessidade de intermediários como engines ou bridges (como acontece no React Native ou Flutter). Você tem acesso direto a APIs nativas do Android (via Kotlin) e iOS (via Swift), sem restrições ou necessidade de bibliotecas de terceiros.
Recursos mais complexos, como machine learning, ARKit (iOS) ou Jetpack Compose (Android), são mais fáceis de implementar nativamente. Atualizações Rápidas e Suporte Oficial, Customização Máxima, Estabilidade, Otimização do Uso de Hardware

Por que NÃO usar React Native ou Flutter?
Dependência de Third-Parties: Muitas funcionalidades dependem de bibliotecas externas, o que pode limitar o suporte ou criar instabilidades.
Performance Inferior: Apps multiplataforma podem ser menos eficientes, especialmente em animações ou interações complexas.
Esforço de Ajustes Finais: Apesar de prometida a reutilização de código, ajustes finos em cada plataforma ainda podem ser necessários.
Adoção do Sistema: Frameworks como Flutter ainda não têm adoção oficial, enquanto Kotlin e Swift são mantidos pelos próprios desenvolvedores dos sistemas operacionais.


Quando Flutter ou React Native fazem sentido?
Redução de Custos e Tempo: Quando é necessário um único time de desenvolvimento e você quer lançar rapidamente para iOS e Android.
Projetos Menores ou Simples: Apps simples, como MVPs ou apps com funcionalidades limitadas, podem se beneficiar do desenvolvimento multiplataforma.
Recursos Limitados: Se você não tem desenvolvedores experientes em Kotlin e Swift, Flutter e React Native são opções mais acessíveis.

O react native fornece um conjunto central de componentes nativos agnósticos de plataforma, como view, text, image, etc, que mapeiam diretamente para componentes de UI nativos da plataforma, ou seja, ele declara o que eu quero e renderiza na plataforma.

.tsx é a extensão do typescript de um componente, utilizamos em react native, o react para criar interface de forma declarativa, usando a sintaxe jsx

A view é como se fosse uma div, e o text o texto




Diferença entre React e React Native
React (ou React.js)
Descrição: É uma biblioteca JavaScript criada pelo Facebook para construir interfaces de usuário (UIs) em aplicações web.
Objetivo: Construir componentes reutilizáveis para interfaces de usuário em navegadores.
Plataforma: Voltado para aplicações web.
Renderização: Gera HTML que é interpretado pelo navegador.
Ferramentas Comuns: Webpack, Babel, e ReactDOM para renderizar o código no navegador.
React Native
Descrição: É um framework baseado no React que permite criar aplicativos móveis nativos para iOS e Android.
Objetivo: Usar o mesmo conhecimento de React (como JSX e componentes) para criar aplicativos que rodem nativamente em dispositivos móveis.
Plataforma: Voltado para aplicações móveis.
Renderização: Em vez de HTML, utiliza componentes nativos (como Text, View, e Button).
Diferença Fundamental: No React Native, você escreve código em JavaScript, mas ele é convertido em componentes nativos no Android (Java/Kotlin) e iOS (Swift/Objective-C).

Exemplo da Diferença na Prática
React (Web):
jsx
Copiar código
import React from 'react';

function App() {
  return (
    <div>
      <h1>Olá, React Web!</h1>
    </div>
  );
}

export default App;


Diferença entre React e React Native
React (ou React.js)
Descrição: É uma biblioteca JavaScript criada pelo Facebook para construir interfaces de usuário (UIs) em aplicações web.
Objetivo: Construir componentes reutilizáveis para interfaces de usuário em navegadores.
Plataforma: Voltado para aplicações web.
Renderização: Gera HTML que é interpretado pelo navegador.
Ferramentas Comuns: Webpack, Babel, e ReactDOM para renderizar o código no navegador.
React Native
Descrição: É um framework baseado no React que permite criar aplicativos móveis nativos para iOS e Android.
Objetivo: Usar o mesmo conhecimento de React (como JSX e componentes) para criar aplicativos que rodem nativamente em dispositivos móveis.
Plataforma: Voltado para aplicações móveis.
Renderização: Em vez de HTML, utiliza componentes nativos (como Text, View, e Button).
Diferença Fundamental: No React Native, você escreve código em JavaScript, mas ele é convertido em componentes nativos no Android (Java/Kotlin) e iOS (Swift/Objective-C).
Exemplo da Diferença na Prática
React (Web):
jsx
Copiar código
import React from 'react';

function App() {
  return (
    <div>
      <h1>Olá, React Web!</h1>
    </div>
  );
}

export default App;
React Native:
jsx
Copiar código
import React from 'react';
import { Text, View } from 'react-native';

function App() {
  return (
    <View>
      <Text>Olá, React Native!</Text>
    </View>
  );
}

export default App;
No React, usamos elementos HTML, como <div> e <h1>.
No React Native, usamos componentes específicos da plataforma, como <View> e <Text>.


O que é JSX?
JSX (JavaScript XML) é uma extensão de sintaxe para JavaScript que permite escrever código semelhante a HTML dentro do JavaScript.

Por que JSX é útil?
Sintaxe Familiar: Facilita o desenvolvimento porque se parece com HTML, que é mais fácil de ler e entender.
Integração com JavaScript: Você pode incluir expressões JavaScript diretamente no código JSX usando {}.
Reutilização: Componentes escritos em JSX podem ser reutilizados de maneira simples e organizada.
Como o JSX funciona?
O JSX não é compreendido diretamente pelo navegador ou pelo ambiente de execução. Ele é convertido em JavaScript puro por ferramentas como Babel. Por exemplo:

JSX:

jsx
Copiar código
const element = <h1>Olá, JSX!</h1>;
JavaScript compilado:

javascript
Copiar código
const element = React.createElement('h1', null, 'Olá, JSX!');
Exemplo prático do JSX
jsx
Copiar código
function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}

const App = () => (
  <div>
    <Saudacao nome="Bernardo" />
  </div>
);
Aqui, o props.nome é interpolado usando {} para exibir dinamicamente o nome.

Resumo das Diferenças e Conceitos
Aspecto	React	React Native
Plataforma	Web	Mobile (iOS/Android)
Renderização	HTML/CSS	Componentes nativos
Componentes comuns	div, span, h1	View, Text, Button
Uso de JSX	Sim	Sim
JSX, por sua vez, é apenas a sintaxe que facilita o desenvolvimento, sendo usada em ambos (React e React Native).



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