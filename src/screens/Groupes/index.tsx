import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from'./styles';
import { Header } from '@/src/components/Header';
import { HighLight } from '@/src/components/HighLight';
import { GroupCard } from '@/src/components/GroupCard';
import { ListEmpty } from '@/src/components/ListEmpty';
import { Button } from '@/src/components/Button';

export function Groupes() {
  
    const [groupes, setGroupes] = useState <string[]> ([]);
  
  
  return (

    
    <Container>
    <Header />
    <HighLight
        title="Times"
        subTitle="Forme o seu time e jogue com seus amigos"
    />

    <FlatList
        data={groupes}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
            <GroupCard 
                title={item}
            />
        )}
        ListEmptyComponent={() => (
            <ListEmpty text="Não há times disponíveis no momento !" />
        )}
    />



    <Button
        tittle="Criar Time"
        
      
    />





    </Container>

  )
};

