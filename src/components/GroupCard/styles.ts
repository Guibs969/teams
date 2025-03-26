import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { UsersThree } from 'phosphor-react-native';


export const Container = styled(TouchableOpacity)`
    width: 95%;
    height: 90px;
    background-color: #29292E;
    border-radius: 10px;
    flex-direction: row;
    justify-content: center;
    padding: 24px;
    margin: 10px;


`;

export const Title = styled.Text` 
    font-family: 'Roboto_400Regular';
    font-size: 18px;
    color: #C4C4CC;

`;

export const Icon = styled(UsersThree)`
    size: 32;
    color: #00875F;
    margin-right: 20px;
   
`;