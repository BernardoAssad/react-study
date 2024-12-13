// Arquivo de estilos do componente, apenas .ts pois ele não renderizará nada
import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

// Exportando uma constante para que outros códigos possam usar o objeto. 
// O StyleSheet.create cria um objeto de estilos, nesse caso, chamado container e title e dentro deles, passamos as regras de estilização.
export const s = StyleSheet.create({
    container: {
        gap: 24,
        flex: 1
    },
    title: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[500]
    }
})