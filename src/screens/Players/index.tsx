import { Header } from '@/src/components/Header';
import { Container, Form, HeaderList, NunberOfPlayers  } from './styles';
import { HighLight } from '@/src/components/HighLight';
import { ButtonIcon } from '@/src/components/ButtonIcon';
import { ListEmpty } from '@/src/components/ListEmpty';
import { Input } from '@/src/components/Input';
import { Filter } from '@/src/components/Filter';
import { PlayerCard } from '@/src/components/PlayerCard';
import { Button } from '@/src/components/Button';
import { FlatList } from 'react-native';
import { useState } from 'react';

    export function Players() {
        const [team, setTeam] = useState('Time A');
        const [players, setPlayers] = useState<string[]>([]);   

  return (
            <Container>
                <Header showBackButton/>

                <HighLight
                    title="Nome do Time"
                    subTitle="Adicione a galera e sapre os times"
                /> 
                <>


                <Form>
                <Input
                placeholder='Nome da pessoa'
                autoCorrect={false}
                
                />

                <ButtonIcon 
                icon="add"
                
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
         />


     </>
            </Container>
        );

    }