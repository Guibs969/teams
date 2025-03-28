import { Container, Logo, BackIcon, BackButton} from "./styles";

import logoImg from "../../../assets/images/logo.png";

import { useNavigation } from '@react-navigation/native';
import { Groupes } from "@/src/screens/Groupes";


type Props = {
    showBackButton: boolean;
    onPress?: () => void;
  };


export function Header({ showBackButton = false }: Props) {
 const navigation = useNavigation();

        
    function handleBack(){
        
        navigation.navigate('Groupes');


    }


    return (
    <>
        <Container>
            { showBackButton &&
            <BackButton onPress={handleBack}>

                <BackIcon/>


            </BackButton>
            }


            <Logo source={  logoImg } />


        </Container>
     </>


    );



} 