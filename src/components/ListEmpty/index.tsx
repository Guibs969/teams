import { Container, Text } from "./styles";


type Props = {
    text: string;
}


export function ListEmpty({ text}: Props) {
    return (

        <Container>
            <Text>
                
                {text}
                
            </Text>
        </Container>



    );
}
