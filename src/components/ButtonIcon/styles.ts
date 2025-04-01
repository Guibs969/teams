import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type : ButtonIconTypeStyleProps;
    onPress: () => void;

};

   export const Container = styled(TouchableOpacity)`
   
     width:56px;
     height:56px;

     justify-content:center;
     align-items:center;
     

     margin-left: 12px;
   `;


export const Icon = styled(MaterialIcons)<Props>`
  color: ${({ type }) => (type === 'PRIMARY' ? '#00B37E' : '#F75A68')};
`;