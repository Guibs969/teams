import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Container } from'./styles';
import { Header } from '@/src/components/Header';
import { HighLight } from '@/src/components/HighLight';
import { GroupCard } from '@/src/components/GroupCard';
import { ListEmpty } from '@/src/components/ListEmpty';
import { Button } from '@/src/components/Button';
import { useNavigation } from '@react-navigation/native';
import { groupesGetAll } from '@/src/storage/groupe/groupesGetAll';

export function Groupes() {
  
    const [groupes, setGroupes] = useState <string[]> ([ '']);
    const navigation = useNavigation();
    

    function handleNewGroupe(){
        
        navigation.navigate('NewGroupe');
        
    }

    async function fetchGroupes(){
        try{
          const data = await groupesGetAll();   
          setGroupes(data);  


        }catch{

            console.log(Error);


        }


    }

    useEffect(() => {
        fetchGroupes();
        console.log('O UseEffect foi executado!!');
    },[]);


    
  
  return (

    
    <Container>
    <Header  
    showBackButton ={false}
    
    
    
    />
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
        onPress={handleNewGroupe}
      
    />





    </Container>

  )
};

