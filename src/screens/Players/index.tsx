import { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native'
import { Alert, FlatList, Keyboard } from 'react-native';
import { Container, Form, HeaderList, NunberOfPlayers  } from './styles';


import { Header } from '@/src/components/Header';
import { HighLight } from '@/src/components/HighLight';
import { ButtonIcon } from '@/src/components/ButtonIcon';
import { ListEmpty } from '@/src/components/ListEmpty';
import { Input } from '@/src/components/Input';
import { Filter } from '@/src/components/Filter';
import { PlayerCard } from '@/src/components/PlayerCard';
import { Button } from '@/src/components/Button';

import { playerAddByGroupe } from '@/src/storage/player/playerAddByGroupe';
import { playersGetByGroupe } from '@/src/storage/player/playersGetByGroupe';
import{ playersGetByGroupeAndTeam }from '@/src/storage/player/playersGetByGroupAndTeam';
import { PlayerStorageDTO } from '@/src/storage/player/PlayerStorageDTO';
import { playerRemoveByGroupe } from '@/src/storage/player/playerRemoveByGroupe';
import { groupeRemoveByName } from '@/src/storage/groupe/groupeRemoveByName';



    export function Players() {

        const [newPlayerName, setNewPlayerName] = useState('');
        const [team, setTeam] = useState('Time A');
        const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);   
        const route = useRoute();
        const { groupe } = route.params as { groupe: string };
        const navigation = useNavigation();
   
       
       
       
        async function handleAddPlayer(){
            if(newPlayerName.trim().length === 0) {
               return  Alert.alert('Nenhum nome foi digitado !!!')

            }

                const newPlayer = {
                    name:newPlayerName,
                    time:team 


                }


                    try{

                        await playerAddByGroupe(newPlayer, groupe);
                        setNewPlayerName('');
                        fetchPlayerByTeam();
                        Keyboard.dismiss();
                        const players = await playersGetByGroupe(groupe);
                        console.log(players);


                    } catch (error) {

                            console.log(error);
                            


                    }



        }

        async function  fetchPlayerByTeam(){

            try {
                const playersByTeam = await  playersGetByGroupeAndTeam(groupe, team);
                setPlayers(playersByTeam);



            }catch(error){

                console.log(error);
                Alert.alert('Nao foi possível carregar os integrantes do grupo !!! ');



            }




        }


        
        async function removePlayer(playerName: string){
            try{

                await playerRemoveByGroupe(playerName, groupe);
                fetchPlayerByTeam();

            }catch(error){

                console.log(error);

                Alert.alert('Erro ao remover');




            }






        }

        async function groupeRemove(){
            try{

                await groupeRemoveByName(groupe);
                navigation.navigate('Groupes');



            }catch(error){

                    console.log(error);
                    Alert.alert('Erro :Não foi possível remover GRUPO !!! ');








            }










        }

        async function removeGroupe(){
            Alert.alert(
                'Remover',
                'Deseja remover o grupo?',

                [
                    {text:'Não', style:'cancel'},
                    {text: 'Sim', onPress:()=>{groupeRemove}}


                ]



            );




        }



    useEffect(()=>{

        fetchPlayerByTeam();
        console.log('O use Effect foi acionado!');

    },[team]);


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
                value={newPlayerName}
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
         keyExtractor={(item) => item.name}
         renderItem={({ item }) => (
             <PlayerCard 
                 name={item.name}
                 onRemove={() => removePlayer(item.name)}
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
                onPress={groupeRemove}
         />


     </>
            </Container>
        );

    }