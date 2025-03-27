import { Container, Content, Icon } from "./styles";
import { Header } from "../../components/Header";
import { HighLight } from "@/src/components/HighLight";
import { Button } from "@/src/components/Button";
import { Input } from "@/src/components/Input";
import { useNavigation } from '@react-navigation/native';





export function NewGroupe() {

    const navigation = useNavigation();

    function handleBack(){
        
        navigation.navigate('Groupes');
        
    }

    return (
        <Container>

           <Header 
                showBackButton={true}
                onPress={handleBack} 
            />
          
            <Content>
               
                    
                    <Icon/>

                        <HighLight
                            title="Criar Time"
                            subTitle="Crie um novo Time adicionar os integrantes"
                        />

                        <Input
                        placeholder="Nome do Time"
                        placeholderTextColor={'rgba(255, 255, 255, 0.25)'}
                        autoCorrect={false}
                        
                        />

                        <Button
                            tittle="Criar Time"
                            onPress={() => {}}
                            />

            </Content>

        </Container>
    );
}