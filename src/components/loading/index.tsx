// Estrutura do componente
// Importando o componente de loading do react-native
import { ActivityIndicator } from "react-native"
// Importando nosso arquivo de estilização do componente
import { s } from "./styles"
// Importando nosso arquivo de cores do aplicativo
import { colors } from "@/styles/theme"

// Criando uma função para exportar chamada Loading que será o nosso componente de carregamento
// Por ser um componente, é importante não ser exportada por padrão, é melhor ser chamada pelo nome, exportação nomeada.
// Retornamos uma View com vários elementos dentro, pois não pode ter mais de um retorno, e a view é como se fosse uma div.
export function Loading() {
    // Retornando o activity indicator com as propriedades customizadas de cor e estilos que criamos.
    return <ActivityIndicator color={colors.green.base} style={s.container} />
}