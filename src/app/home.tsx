import { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";

// Importando nossa api para buscar os dados
import { api } from "@/services/api"
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";

type MarketsProps = PlaceProps

export default function Home() {
    // Criando uma array para pegar o estado delas, com o useState, que é uma função também do React.
    // O useState, estamos criando um estado, que tem um Array, que a primeira posição é onde vamos armazenar o conteúdo,
    // e a segunda é uma função que irá atualizar o estado. Usamos o estado pois ele tem a capacidade de mostrar na tela 
    // sempre o conteúdo atualizado. Também colocamos um generic, <CategoriesProps> para podermos tipar e passamos também
    // o [] para dizer que de ínicio ele é uma lista vazia, e quando carregar, ela é preenchida.

    const [categories, setCategories] = useState<CategoriesProps>([])

    // Aqui estamos pegando o estado da categoria, para saber se ela está selecionada ou não, e deixamos vazio o useState como string,
    // pois será passado o ID ou nome do que estiver selecionado
    const [category, setCategory] = useState("")

    const [markets, setMarkets] = useState<MarketsProps[]>([])
    
    // Criamos uma função assíncrona chamada fetchCategories para buscar as categorias do nosso app,
    // Dentro, colocamos um try catch, caso dê erro, retorna o erro no console e dá um alert para o usuário,
    // usando a biblioteca Alert do react-native, onde o "Categoria" é o título e o texto dentro do segundo "",
    // é a mensagem. No try, colocamos um const data await, para que o código aguarde a resposta do backend para carregar, 
    // por esse motivo é uma função assíncrona. Pegamos o api.get do endpoint categories, para pegar os dados desse endpoint.
    async function fetchCategories() {
        try {
            // Pegando a categoria e salvando no estado.
            const { data } = await api.get("/categories")
            setCategories(data)
            // Definindo a primeira categoria da lista como padrão ativa
            setCategory(data[0].id)
        } catch (error) {
            console.log(error)
            Alert.alert("Categorias", "Não foi possível carregar as categorias.")
        }
    }

    async function fetchMarkets() {
        try {
            if (!category) {
                return
            }
            
            const {data} = await api.get("/markets/category/" + category)
            setMarkets(data)

        } catch (error) {
            console.log(error)
            Alert.alert("Locais", "Não foi possível carregar os locais.")
        }
    }
    // Estamos usando uma função do react, que basicamente ela funciona fornecendo alguma função quando a página
    // renderizar. A estrturua dela é simples, tem uma array function, com uma função anonima, e um [] que são o array de dependências
    useEffect(() => {
        fetchCategories()
    },[])

    useEffect(() => {
        fetchMarkets()
    },[category]) // Com essa dependência, dizemos que só vai carregar esse fetchMarkets se o category tiver carregado.
    // Retornamos as categorias que estamos buscando via api para renderizar no app.
    return (
        <View style={{flex:1}}>
            <Categories data={categories} onSelect={setCategory} selected={category}/>
            <Places data={markets}/>
        </View>
    )
}