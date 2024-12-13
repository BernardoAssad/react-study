// Arquivo de estilos do componente, apenas .ts pois ele não renderizará nada
import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

// Exportando uma constante para que outros códigos possam usar o objeto. 
// O StyleSheet.create cria um objeto de estilos, nesse caso, chamado container e title e dentro deles, passamos as regras de estilização.
export const s = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[100],
        flex: 1
    },
    content: {
        gap: 12,
        padding: 24,
        paddingBottom: 100
    },
    indicator: {
        width: 80,
        height: 4,
        backgroundColor: colors.gray[300]
    },
    title: {
        color: colors.gray[600],
        fontSize: 16,
        fontFamily: fontFamily.regular,
        marginBottom: 16
    }
})