import { Header } from '@/src/components/Header';
import { Container, Form, HeaderList, NunberOfPlayers  } from './styles';
import { HighLight } from '@/src/components/HighLight';
import { ButtonIcon } from '@/src/components/ButtonIcon';
import { Input } from '@/src/components/Input';
import { Filter } from '@/src/components/Filter';
import { FlatList } from 'react-native';
import { useState } from 'react';

    export function Players() {
        const [team, setTeam] = useState('Time A');
        const [players, setPlayers] = useState<string[]>(['1']);

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
            <NunberOfPlayers> {players.length }</NunberOfPlayers>
        </HeaderList>

                </>
            </Container>
        );

    }