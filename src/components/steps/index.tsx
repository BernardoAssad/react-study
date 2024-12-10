// Estrutura do componente

import { View, Text } from "react-native"
import { s } from "./styles"
// Importando o componente step que é cada item da nossa lista, então juntamos um componente no outro para ser mais simples.
import { Step } from "../step"
// Importando a biblioteca que estamos utilizando de ícones, a Tabler icons
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native"

// Por ser um componente, é importante não ser exportada por padrão, é melhor ser chamada pelo nome, exportação nomeada.
// Retornamos uma View com vários elementos dentro, pois não pode ter mais de um retorno, e a view é como se fosse uma div.
export function Steps() {
    return (
        <View style={s.container}>
            <Text style={s.title}>Veja como funciona:</Text>
            <Step
                icon={IconMapPin}
                title="Encontre estabelecimentos"
                description="Veja locais perto de você que são parceiros Nearby"
            />

            <Step
                icon={IconQrcode}
                title="Ative o cupom com QR Code"
                description="Escaneie o código no estabelecimento para usar o benefício"
            />

            <Step
                icon={IconTicket}
                title="Garanta vantagens perto de você"
                description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
            />

        </View>
    )
}
