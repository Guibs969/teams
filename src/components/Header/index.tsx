import { Container, Logo, BackIcon, BackButton} from "./styles";
import logoImg from "../../../assets/images/logo.png";


type Props = {
    showBackButton: boolean;
    onPress?: () => void;
  };


export function Header({ showBackButton = false }: Props) {

    return (
    <>
        <Container>
            { showBackButton &&
            <BackButton>

                <BackIcon/>


            </BackButton>
            }


            <Logo source={  logoImg } />


        </Container>
     </>


    );



}