// Arquivo de estilos do componente, apenas .ts pois ele não renderizará nada
// O stylesheet nos permite que criar objetos de estilos
import { StyleSheet } from "react-native"
import { colors } from "@/styles/theme"

// Exportando uma constante para que outros códigos possam usar o objeto. 
// O StyleSheet.create cria um objeto de estilos, nesse caso, chamado container e dentro dele, passamos as regras de estilização de um container.
export const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray[100]
    }
})

// Então, nesse arquivo temos as regras de estilização do componente loading.