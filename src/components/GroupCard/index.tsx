import styled from "styled-components/native";
import { UsersThree } from 'phosphor-react-native';
import { TouchableOpacity, Text } from 'react-native';





interface GroupCardProps {
  title: string;
  onPress: () => void;
}

export function GroupCard({ title, onPress }: GroupCardProps) {
  return (
    <Container onPress={onPress}>
      <Icon size={36} />
    
      <Title>{title}</Title>
 
    </Container>
  );
}




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
    font-size: 22px;
    color: #C4C4CC;
    padding-top: 6px;

`;

export const Icon = styled(UsersThree)`
    size: 46;
    color: #00875F;
    margin-right: 20px;
   
`;