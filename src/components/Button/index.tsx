import { TouchableOpacityProps } from "react-native";

import { Container, Title, ButtonTypeStyleProps } from './styles';


type Props = TouchableOpacityProps & {
    tittle: string;
    type?: ButtonTypeStyleProps;

}


export function Button({ tittle, type = 'PRYMARY', ...rest }: Props) {
    return (
        <Container  
        type={type}
        {...rest}>
            <Title>
                {tittle}
            </Title>
        </Container>
    )
}
