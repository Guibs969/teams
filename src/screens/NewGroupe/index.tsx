import { Container, Content, Icon } from "./styles";
import { Header } from "../../components/Header";
import { HighLight } from "@/src/components/HighLight";
import { Button } from "@/src/components/Button";
import { Input } from "@/src/components/Input";



export function NewGroupe() {
    return (
        <Container>
            <Header showBackButton/>
          
            <Content>
               
                    
                    <Icon/>

                        <HighLight
                            title="Criar Time"
                            subTitle="Crie um novo Time adicionar os integrantes"
                        />

                        <Input
                        placeholder="Nome do Time"
                        
                        />

                        <Button
                            tittle="Criar Time"
                            onPress={() => {}}
                            />

            </Content>

        </Container>
    );
}