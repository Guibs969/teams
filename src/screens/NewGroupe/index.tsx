import { useState } from "react";
import { Container, Content, Icon } from "./styles";
import { Header } from "../../components/Header";
import { HighLight } from "@/src/components/HighLight";
import { Button } from "@/src/components/Button";
import { Input } from "@/src/components/Input";
import { useNavigation } from '@react-navigation/native';
import { groupeCreate } from "@/src/storage/groupe/groupeCreate";
import { Alert } from "react-native";




export function NewGroupe() {

    const [groupe, setGroupe] = useState('');
    const navigation = useNavigation();

    function handleBack(){
        
        navigation.navigate('Groupes');
        
    }


    async function handlePlayer(){
        try{
            if (groupe.trim().length === 0 ){
                return Alert.alert('Informe o nome do Grupo !!!')

            }

        await groupeCreate(groupe);
        navigation.navigate('Players', { groupe });
    }catch{

        console.log(Error);

    }
        
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
                        onChangeText={setGroupe}
                        
                        />
                      

                        <Button
                            tittle="Criar Time"
                            onPress={handlePlayer} 
                            />

            </Content>

        </Container>
    );
}