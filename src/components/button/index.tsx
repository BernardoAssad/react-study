// Estrutura do componente
// Importando algumas features do react-native, como touchableopacity e text, o touchableopacity é 
// algo clicável com uma certa opacidade configurável, e o text, um texto. Já o TouchableOpacityProps e o
// TextProps, servem para tipar e dinamizar esses elementos, fazendo com que o texto e o botão seja dinãmico.
import { TouchableOpacity, TouchableOpacityProps, Text, TextProps, ActivityIndicator } from "react-native";
// Importando biblioteca de ícones, e renomeando para TablerIconProps para evitar confusão no código
import { IconProps as TablerIconProps } from "@tabler/icons-react-native"
// Importando estilos e cores
import { s } from "./styles"
import { colors } from "@/styles/theme"

// Criando um tipo personalizado ButtonProps que terá as propriedades do TouchableOpacityProps e também o
// isLoading, que basicamente funcionará se o botão tiver carregando a funcionalidade, ficará um ícone de loading
// carregando
type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean
}
// Essa forma que estamos fazendo, estamos desmembrando um componente, pois ele pode ser um botão com texto,
// com ícone, ou tudo junto, fornecendo mais liberdade ao dev.

// Componente do botão, desmembrando a função e dizendo que o tipo dela é ButtonProps para termos acesso
// as propriedades do botão, e passamos children, para dizer que é uma propridade pai e que pode ter uma propridade filha.
// Passamos também a propriedade style, que permite que o estilo desse botão seja alterado dinamicamente quando chamar o componente.
// Passamos o isLoading false para podermos acessar o isLoading para mostrar o ícone carregando
// Por último, pegamos o ...rest que significa que está pegando todas as propriedades que não extraimos explicitamente, para que não fiquem de fora
function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
    // Fazendo um botão com opacidade e com a propriedade disabled para desabilitar o botão se o isLoading tiver ativo
    return (
        <TouchableOpacity style={[s.container, style]} activeOpacity={0.8} disabled={isLoading} {...rest}>
            {/* Retornando um if ternário, verificando se o isLoading é verdadeiro, mostra o ActivityIndicator,
            se não, mostra o children. */}
            {isLoading ? <ActivityIndicator size="small" color={colors.gray[100]} /> : children}
        </TouchableOpacity>
    )
}

// Componente do título, desmembrando a função, e dizendo que o tipo dela é TextProps para termos acesso
// as propriedades do texto, e passamos children, para dizer que é uma propridade filha que depende de outra.
function Title({ children }: TextProps) {
    return (
        // Retornando um título e o children para aparecer o conteúdo dinamicamente
        <Text style={s.title}>
            {children}
        </Text>
    )
}

// Criando um tipo personalizado chamado IconProps, por isso renomeamos lá em cima também o import
type IconProps = {
    icon: React.ComponentType<TablerIconProps>
}

// Desmembramos a função e pegamos o tipo IconProps para termos acesso aos ícones do Tabler e já renomeando o icon
// para Icon, pois componente começa com letra maiúscula
function Icon({ icon: Icon}: IconProps) {
    return <Icon size={24} color={colors.gray[100]}/>
}

// Antes de retornarmos o botão, colocamos o .Title recebendo Title para que possamos usar o título em outros arquivos.
Button.Title = Title
// Colocamos o .Icon recebendo Icon para que possamos usar algum ícone em outros arquivos.
Button.Icon = Icon

export { Button }