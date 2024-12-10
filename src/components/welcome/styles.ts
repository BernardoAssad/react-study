// Arquivo de estilos do componente, apenas .ts pois ele não renderizará nada
// O stylesheet nos permite que criar objetos de estilos
import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

// Exportando uma constante para que outros códigos possam usar o objeto. 
// O StyleSheet.create cria um objeto de estilos, nesse caso, chamado logo, title e subtitle e dentro deles, passamos as regras de estilização.
export const s = StyleSheet.create({
    logo: {
        width: 48,
        height: 48,
        marginTop: 24,
        marginBottom: 28
    },
    title: {
        fontSize: 24,
        fontFamily: fontFamily.bold,
        color: colors.gray[600]
    },
    subtitle: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginTop: 12
    }
})