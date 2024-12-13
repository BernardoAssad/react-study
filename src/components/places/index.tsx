// Estrutura do componente
// Biblioteca de dimensões para saber até onde subir a tela
import { useWindowDimensions, Text } from "react-native"
// Importando a biblioteca para fazer o efeito de subir a tela
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { s } from "./styles"
import { Place, PlaceProps } from "../place"
// Biblioteca de useRef do react para termos referência de até onde subir
import { useRef } from "react"


type Props = {
    data: PlaceProps[]
}

export function Places({ data }: Props) {
    // Aqui pegamos as dimensões de todo o celular
    const dimensions = useWindowDimensions()
    // Aqui pegamos a referência da biblioteca que importamos de onde está
    const bottomSheetRef = useRef<BottomSheet>(null)


    // Definimos uma constante com altura minima e máxima para o snapPoints usado no BottomSheet abaixo,
    // onde o mínimo é 278 e o máximo é o tamanho da tela - 128 que é um valor base pra dinamizar a altura.
    const snapPoints = {
        min: 278,
        max: dimensions.height - 128
    }
    
    // Essa referência é para conseguirmos manipular esse elemento por referência.
    // bottomSheetRef.current?.collapse (Um exemplo)
    // snapPoint é uma array de tamanhos, onde o primeiro elemento é a altura default, e a segunda é até onde ele chega.
    // E o handleIndicatorStyle é o estilo da barrinha do indicador
    // backgroundStyle é o estilo do background e enableOverDrag é se ele passa ou não do limite do snap, no caso, false.
    return (
        <BottomSheet 
            ref={bottomSheetRef} 
            snapPoints={[snapPoints.min, snapPoints.max]} 
            handleIndicatorStyle={s.indicator}
            backgroundStyle={s.container}
            enableOverDrag={false}
        >
            {/* Esse ListHeaderComponent serve como um cabeçalho da lista */}
            <BottomSheetFlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Place data={item}/>}
                contentContainerStyle={s.content}
                ListHeaderComponent={() => (
                    <Text style={s.title}>Explore locais perto de você</Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </BottomSheet>
    )
}