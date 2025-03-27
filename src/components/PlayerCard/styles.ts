import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  height :56px ;
  background-color: #29292E;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 8px;
`;


export const Name = styled.Text`
    flex: 1;
    font-size: 16px;
    font-family: 'Roboto_400Regular';
    color:#C4C4CC;
    

`;

export const Icon = styled(MaterialIcons)`
    size: 15px;
    color: #C4C4CC;
    margin-right: 16px;
    margin-left: 4px;
`;