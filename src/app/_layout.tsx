// Arquivo responsável pelas rotas da aplicação. e por esse motivo, é o primeiro arquivo a ser carregado.
// O _ indica que é um componente de layout global: Serve como base para definir o layout compartilhado em todas as páginas ou rotas.
// E também como organização de rotas (frameworks como Next.js):
// Em alguns frameworks, arquivos com nomes especiais, como _layout, têm uma função específica, como renderizar a estrutura principal para todas as páginas de uma rota.

// Importando o tipo de navegação em pilhas
import { Stack } from "expo-router"
// Importando o tema com as cores, o @/ está pegando dentro de src conforme definimos no tsconfig.json
import { colors } from "@/styles/theme"
// Importando a biblioteca que verifica que estamos arrastando a tela
import { GestureHandlerRootView } from "react-native-gesture-handler"
// Importando as fontes que iremos utilizar no projeto, do google fonts. useFonts é utilizado para carregar as fontes e o restante as fontes.
import { 
    useFonts,
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
} from "@expo-google-fonts/rubik"

// Importando componente de Loading
import { Loading } from "@/components/loading"

// Exporta uma função padrão do arquivo: Permite que outros arquivos importem essa função sem a necessidade de usar um nome específico.
export default function Layout() {
    // Carregando as fontes do projeto dentro do componente layout que é responsável pelas configurações na navegação.
    // Já que o código passa por aqui antes do index, garantimos que as fontes serão carregadas. Porém, elas são carregadas assincronamente, então temos que garantir de carregar antes de abrir alguma página.
    // Criamos o const [fontsLoaded] para termos certeza que foi carregado antes de abrir qualquer página, pois o método useFonts, nos dá uma array que o primeiro parametro é para saber se já foram carregadas as fontes.
    const [fontsLoaded] = useFonts({
        Rubik_600SemiBold,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_700Bold
    })
    
    if (!fontsLoaded) {
    // Se as fontes não estiverem carregadas, irá retornar o nosso componente de loading.
        return <Loading />
    }
    // Retornando o tipo de navegação, passando como parametro o screenOptions, que possui algumas opções de personalização, no caso o headerShown altera a visibilidade do cabeçalho padrão.
    //A propriedade contentStyle no React Navigation, especialmente no contexto de stacks, é usada para estilizar o contêiner principal de cada tela.
    // Ou seja, todos os componentes que usam essa navegação, terão esse comportamento. No caso, essa cor de fundo, pegando do arquivo themes.
    // Tudo isso sendo envolvido pela funcionalidade GestureHandlerRootView que verifica se estamos arrastando a tela para fazer efeito, com o estilo flex 1 para pegar a tela toda.
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: {backgroundColor: colors.gray[100]}
                }}
            />
        </GestureHandlerRootView>
    )
}