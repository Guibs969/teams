import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type FilterStyleProps = {

    taAtivo?: boolean;


}


export const Container = styled(TouchableOpacity)<FilterStyleProps>`

        ${({ taAtivo }) => taAtivo && css`
        
          border: 1px solid green;
    
        `};

        border-radius: 6px;
        margin-right: 12px;


        height: 40px;
        width: 70px;

        align-items: center;
        justify-content: center;
        
`;


export const Title = styled.Text`
    font-family: 'Roboto 700Bold';
    font-size: 14px;
    color:white;
    text-transform: uppercase;




`;
