// index.tsx é o primeiro arquivo a ser carregado depois do _layout.
// Importando função de view e text padrão do react native
import { View, Text } from "react-native"

// Importando o componente welcome
import { Welcome } from "@/components/welcome"

import { Steps } from "@/components/steps"

// Exportando por padrão uma função, um componente, para que o expo houter entenda que esse arquivo é uma rota dentro da aplicação
// O Expo Router é uma biblioteca que traz o conceito de rotas baseadas em arquivos para projetos React Native criados com o Expo.
// O componente começa com uma letra maiúscula, tem que ter retorno, não pode devolver 2 elementos de uma vez
export default function Index() {
    return (
        // Arquivos .tsx são usados principalmente em projetos React, onde escrevemos componentes e usa a sintaxe JSX (mistura de HTML e JavaScript/TypeScript).
        // As duas chaves ({{ }}) são necessárias devido à forma como o React Native e o JSX lidam com objetos JavaScript e valores dinâmicos.
        // 1ª Chave Externa: Sintaxe JSX - A primeira chave { } é usada em JSX para indicar que estamos inserindo uma expressão JavaScript dentro do JSX.
        // Em JSX, qualquer coisa entre {} será avaliada como uma expressão JavaScript.
        //No caso, estamos dizendo: "Coloque aqui um valor JavaScript (que é um objeto no exemplo)."
        // 2ª Chave Interna: Objeto JavaScript
        // A segunda chave { } representa a sintaxe literal de um objeto JavaScript.
        // Dentro da expressão JavaScript, estamos declarando um objeto que contém a propriedade flex: 1.
        // Isso é necessário porque o style em React Native espera receber um objeto de estilo, e estamos criando um objeto diretamente ali.
        // Usamos as mesmas regras do css para estilizar em react, então, a propriedade style nos permite estilizar com CSS, o flex: 1 representa display flex
        // Também usamos o camelCase para declarar os estilos
        <View style={{ flex: 1, padding: 40, gap: 40 }} >   
            {/* Aqui importamos no index os componentes que criamos. */}
            <Welcome />
            <Steps />
        </View>
    )
}