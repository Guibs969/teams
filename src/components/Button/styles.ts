import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'PRYMARY' | 'SECONDARY' ;

type Props = {
        type: ButtonTypeStyleProps;

}


export const Container = styled(TouchableOpacity)<Props>`

    flex:1;

    min-height: 56px;
    max-height: 56px;


        background-color: ${({ type }) => type === 'PRYMARY' ? '#00875F' : '#F75A68'};

    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin:  20px;
    padding: 10px;

`;

export const Title = styled.Text`
    
    font-family: 'Roboto_700Bold';
    font-size: 16px;
    color: #FFFFFF;

`;