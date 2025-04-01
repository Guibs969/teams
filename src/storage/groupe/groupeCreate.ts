import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUPE_COLLECTION } from '../storageConfig';
import { groupesGetAll } from './groupesGetAll';
import { AppError } from '../../utils/AppError';
import { Alert } from 'react-native';


export async function groupeCreate(newGroupeName: string){

        try{
            const storedGroupes = await groupesGetAll();
            const groupeExistente = storedGroupes.includes(newGroupeName);

            if (groupeExistente){
                throw new AppError('Já existe um grupo com esse nome Cadastrado !!!')&&

                  Alert.alert('Já existe um grupo com esse nome Cadastrado !'); 

            } 


            const storage = JSON.stringify([...storedGroupes, newGroupeName]);

            await AsyncStorage.setItem(GROUPE_COLLECTION, storage);


        }catch(error){
            throw error;

        }



}

