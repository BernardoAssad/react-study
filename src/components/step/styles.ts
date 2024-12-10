// Arquivo de estilos do componente, apenas .ts pois ele não renderizará nada
import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

// Exportando uma constante para que outros códigos possam usar o objeto. 
// O StyleSheet.create cria um objeto de estilos, nesse caso, chamado container e title e dentro deles, passamos as regras de estilização.
export const s = StyleSheet.create({
    container: {
        // Por padrão, não é necessário especificar o tipo do tamanho, porém, como é %, precisamos e colocamos dentro de "", o row é porque o JavaScript interpreta que é uma string essa propriedade, se deixassemos sem, ele acharia que é uma variável.
        width: "100%",
        flexDirection: "row",
        gap: 16
    }, 
    details: {
        flex: 1
    },
    title: {
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.gray[600]
    },
    description: {
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginTop: 4
    }
})