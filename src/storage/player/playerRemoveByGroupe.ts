import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "../storageConfig";

import { playersGetByGroupe } from "./playersGetByGroupe";


export async function playerRemoveByGroupe(playerName: string, groupe: string)
{
    try{
        const storage = await playersGetByGroupe(groupe);

        const filtered = storage.filter(player => player.name !== playerName);

        const players = JSON.stringify(filtered);


        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${groupe}`, players);



    } catch (error){




    }


}