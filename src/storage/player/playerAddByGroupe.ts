import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError} from '../../utils/AppError';

import { PLAYER_COLLECTION } from '../storageConfig';
import { playersGetByGroupe } from './playersGetByGroupe';
import { PlayerStorageDTO } from './PlayerStorageDTO';



    export async function playerAddByGroupe( newPlayer:PlayerStorageDTO, groupe: string ){

        try{

            const storedPlayers = await playersGetByGroupe(groupe);
            const playerExistente = storedPlayers.filter(player => player.name === newPlayer.name);


                if (playerExistente.length > 0){

                        throw new AppError('Essa pessoa já esta adicionada em um time !!!');



                }

            const storage = JSON.stringify([...storedPlayers, newPlayer]);   
        


            await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${groupe}`, storage);



        } catch (error) {

            throw(error);


        }




    }


