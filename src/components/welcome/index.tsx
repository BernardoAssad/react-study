// Estrutura do componente

import { Image, Text, View } from "react-native" 
import { s } from "./styles"

// Por ser um componente, é importante não ser exportada por padrão, é melhor ser chamada pelo nome, exportação nomeada.
// Retornamos uma View com vários elementos dentro, pois não pode ter mais de um retorno, e a view é como se fosse uma div.
export function Welcome() {
    return <View>
        {/* Retornamos uma view com essa imagem que pega a logo.png do projeto e o estilo da logo que definimos. */}
        <Image source={require("@/assets/logo.png")} style={s.logo}/>
       
        {/* Retornamos também esse titulo que coloca um texto e o estilo do title que definimos. */}
        <Text style={s.title}>Boas vindas ao Nearby!</Text>
        
        {/* Retornamos também esse texto que coloca um subtitulo e o estilo do subtitle que definimos. */}
        {/*Podemos usar esse trecho ao lado para fazer uma quebra de linha{"\n"}  */}
        <Text style={s.subtitle}>
            Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.
        </Text>
    </View>
}