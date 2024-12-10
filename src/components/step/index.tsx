// Estrutura do componente
// Esse componente servirá como um complemento para o componente steps, onde é uma lista, e esse componente é cada item da lista.

import { View, Text } from "react-native"
import { colors } from "@/styles/theme"
import { s } from "./styles"
// Importando a biblioteca que estamos utilizando de ícones, a Tabler icons
import { IconProps } from "@tabler/icons-react-native" 

// Por ser um componente, é importante não ser exportada por padrão, é melhor ser chamada pelo nome, exportação nomeada.
// Retornamos uma View com vários elementos dentro, pois não pode ter mais de um retorno, e a view é como se fosse uma div.

// Para podermos reaproveitar o componente, porém com dados diferentes, precisamos passar propriedades para eles, para termos essa flexidade de cada step ter dados diferentes. 
// Então as propriedades serve para isso, conseguimos passar propriedade pra 1 componente, recuperar essas informações e usar elas dentro do componente.
// Declaramos abaixo que precisamos da propriedade no componente
// Não precisamos pegar de props, podemos desestruturar, ou seja, podemos pegar direto dos atributos, como está da forma não comentada.

// As propriedades dentro do Step, no caso title e description, que nós definimos esse nome, mas pode ser qualquer coisa, eles precisam ser tipados, por isso usamos o TypeScript.
// Ou seja, temos que definir, quais são as propriedades que esse componente aceita receber.
// Então abaixo, criamos um objeto type com o nome Props, pode ser qualquer coisa e dentro dele, definimos quais as propriedas e os tipos dela.
// Passamos também o icon, mas ele é um componente que precisamos também, então usamos uma tipagem de componente, o React.ComponentType.
// Precisamos também, especificar que tipo de componente estamos usando, no caso, usamos a Generic <> que é um tipo em TypeScript, um tipo genérico, e passamos dentro dela o IconProps que é os icones da biblioteca que usamos
// Um Generic Type em TypeScript é uma forma de criar componentes ou funções reutilizáveis que podem funcionar com diferentes tipos de dados, sem precisar especificar o tipo exato no momento da definição. Ele permite que o tipo seja definido dinamicamente quando a função, classe ou interface é usada.
type Props = {
    title: string
    description: string
    icon: React.ComponentType<IconProps>
}
// E no export, nós passamos depois com : Props, definindo a tipagem, logo, como declaramos que precisamos disso, qualquer chamada do Step, precisa ter os parametros necessários para ele.
// Esse icon: Icon, basicamente estamos recuperando o icone com o icon, e já que um componente precisa começar com letra maiúscula, usamos o : Icon para renomear a propriedade.
// export function Step(props) {
export function Step ({ title, description, icon: Icon}: Props) {
    return (
        <View style={s.container}>
            {/* Implementando o ícone passando alguns parametros para ele. */}
            {/* Passamos o { Icon && <Icon...} para evitar erro, então dessa forma, entre chaves, ele verifica SE TEM o icone e ai sim ele renderiza ele. Então se não tiver o ícone não renderiza. E não dá erro */}
            {Icon && <Icon size={32} color={colors.red.base}/>}
            {/* Essa View para ficar um elemento abaixo do outro com esse estilo details para pegar todo o espaço disponível*/}
            <View style={s.details}> 
                {/* Aqui, usamos o props.title e description para que seja substituído e exibido no componente pelo texto que passarmos
                Se não colocarmos entre {}, o código acha que estamos passando uma string, dessa forma ele substitui. 
                Já que desestruturamos, ao invés de pegar por props ou o nome que seja, pegamos direto pelo desestruturado, nesse caso, title e description. */}
                <Text style={s.title}>{title}</Text>
                <Text style={s.description}>{description}</Text>
            </View>
        </View>
    )
}
