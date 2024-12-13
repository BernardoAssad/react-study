// Estrutura do componente
// Importando texto, pressable e pressableprops que é um botão, porém ele não tem um efeito de opacidade.
import { Text, Pressable, PressableProps } from "react-native";
import { s } from "./styles";
import { categoriesIcons } from "@/utils/categories-icons";
import { colors } from "@/styles/theme"
import { blue } from "react-native-reanimated/lib/typescript/Colors";

// Criando um tipo personalizado chamado props que pega as propriedades do PressableProps e também outras adicionais
// descritas abaixo.
type Props = PressableProps & {
    name: string
    iconId: string
    isSelected?: boolean
}

export function Category({name, iconId, isSelected = false, ...rest}: Props){
    const Icon = categoriesIcons[iconId]
    return (
        // Colocando o botão com o estilo definido do container e também passando se tiver selecionado E o container tiver selecionado
        // Usamos no final o ...rest, para que o estilo consiga pegar a propriedade de ficar verde o botão quando for clicado.
        <Pressable style={[s.container, isSelected && s.containerSelected]}{...rest}>
            <Icon size={16} color={colors.gray[isSelected ? 100 : 400]}/>
            <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
        </Pressable>
    )
}