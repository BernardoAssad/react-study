// Arquivo de estilos do componente, apenas .ts pois ele não renderizará nada
// O stylesheet nos permite que criar objetos de estilos
import { StyleSheet } from "react-native"

export const s = StyleSheet.create({
    container: {
        maxHeight: 36,
        position: "absolute",
        zIndex: 1,
        top: 64
    },
    content: {
        gap: 8,
        paddingHorizontal: 24
    }
})