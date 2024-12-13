// Estrutura do componente
// Importando a flatlist que é uma lista do react-native
import { FlatList } from "react-native";
import { Category } from "../category";
import { s } from "./styles"

// Aqui criamos o tipo personalizado de propriedades das categorias que iremos pegar do backend, passamos
// 2 parametros dentro que é o id e o name, e por fim, o [] representa que o que vamos receber é uma lista
// E também definimos como export para que possamos usar em outros arquivos
export type CategoriesProps = {
    id: string
    name: string
}[]

// Tipo personalizado de propriedades para as categorias, com o CategoriesProps, selected, para saber quem está
// selecionado, e onSelect que é um método, podemos passar um método dessa forma, ele recebe um id e não retorna nada.
type Props = {
    data: CategoriesProps
    selected: string
    onSelect: (id: string) => void
}

export function Categories({ data, selected, onSelect }: Props) {
    return (
        // A flatlist tem suas próprias propriedades para poder renderizar os itens, então passamos os 
        // dados, via data, passamos o keyExtractor, onde extraimos todos os itens e pegamos os ids, e ele é importante
        // para esse tipo de lista, porque cada item precisa ter um identificador. E o renderItem é o que queremos renderizar para cada item da lista 
        // Passamos também o atributo horizontal para deixar os itens da lista na horizontal
        // O atributo showsHorizontalScrollIndicator tira ou coloca a barrinha de rolagem para quando mexer na lista
        // Os atributos contentContainerStyle e style são de estilização.
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                // Aqui temos o onPress com uma array function para o onSelect que pega o item.id para saber quem está sendo selecionado
                // E usando o item.id === selected dentro do método que criamos isSelected, para saber se está selecionado.
                <Category 
                    name={item.name} 
                    iconId={item.id} 
                    onPress={() => onSelect(item.id)} 
                    isSelected={item.id === selected}
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={s.content}
            style={s.container}
        />
    )
}