// Arquivo de estilos do componente, apenas .ts pois ele não renderizará nada
// O stylesheet nos permite que criar objetos de estilos
import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
    container: {
        height: 56,
        maxHeight: 56,
        backgroundColor: colors.green.base,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 14
    },
    title: {
        color: colors.gray[100],
        fontFamily: fontFamily.semiBold,
        fontSize: 16
    }
})