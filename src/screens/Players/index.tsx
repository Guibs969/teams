import { Header } from '@/src/components/Header';
import { Container, Form, HeaderList, NunberOfPlayers  } from './styles';
import { HighLight } from '@/src/components/HighLight';
import { ButtonIcon } from '@/src/components/ButtonIcon';
import { ListEmpty } from '@/src/components/ListEmpty';
import { Input } from '@/src/components/Input';
import { Filter } from '@/src/components/Filter';
import { PlayerCard } from '@/src/components/PlayerCard';
import { Button } from '@/src/components/Button';
import { Alert, FlatList } from 'react-native';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native'





    export function Players() {

        const [newPlayerName, setNewPlayerName] = useState('');
        const [team, setTeam] = useState('Time A');
        const [players, setPlayers] = useState<string[]>([]);   
        const route = useRoute();
        const {groupe} = route.params;
        function emptyPlayers(){
            if  (players.length === 0){
            
                Alert.alert("Não há jogadores no time");

                

            } 

        }

        async function handleAddPlayer(){
            if(newPlayerName.trim.length === 0) {
               return  Alert.alert('Nenhum nome foi digitado !!!')

            }


        }






  return (
            <Container>
                <Header showBackButton/>

                <HighLight
                    title={groupe}
                    subTitle="Adicione a galera e sapre os times"
                /> 
                <>


                <Form>
                <Input
                onChangeText={setNewPlayerName}
                placeholderTextColor={'white'}
                placeholder='Nome da pessoa'
                autoCorrect={false}
                
                />

                <ButtonIcon 
                icon="add"
                onPress={handleAddPlayer}
                
                />

            </Form>
        <HeaderList>
                <FlatList
                data={['Time A', 'Time B']}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Filter title={item} 
                    taAtivo={item === team} 
                    onPress={() => setTeam(item)}/>
                )}

                horizontal

             />
            <NunberOfPlayers> 
                {players.length }
            </NunberOfPlayers>
        </HeaderList>

     <FlatList
         data={players}
         keyExtractor={(item) => item}
         renderItem={({ item }) => (
             <PlayerCard 
                 name={item}
                 onRemove={() => { }}
             />
         )}
         ListEmptyComponent={() => (
             <ListEmpty text="Não há pessoas nesse time !" />
         )}
         showsVerticalScrollIndicator={false}
         contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 , justifyContent: 'center' , paddingBottom: 880 }]}
     />

        
         <Button tittle="Remover Time"
                type='SECONDARY'
                onPress={emptyPlayers}
         />


     </>
            </Container>
        );

    }