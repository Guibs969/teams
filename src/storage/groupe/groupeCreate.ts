import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUPE_COLLECTION } from '../storageConfig';
import { groupesGetAll } from './groupesGetAll';


export async function groupeCreate(newGroupeName: string){

        try{
            const storedGroupes = await groupesGetAll();

            const storage = JSON.stringify([...storedGroupes, newGroupeName]);

            await AsyncStorage.setItem(GROUPE_COLLECTION, storage);


        }catch(error){
            throw error;

        }



}

