import { TouchableHighlightProps } from "react-native";

import { Container, Title, FilterStyleProps } from "./styles";


type Props = TouchableHighlightProps & FilterStyleProps & {
    title: string;
}



export function Filter({ title, taAtivo, ...rest }: Props) {
    return (
        <Container taAtivo={taAtivo} {...rest}>
            <Title>{title}</Title>
        </Container>
    );
}  