import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUPE_COLLECTION, PLAYER_COLLECTION } from "../storageConfig";

import { groupesGetAll } from "./groupesGetAll";



export async function groupeRemoveByName(groupeDeleted: string){

try {

    const storedGroupes = await groupesGetAll();

    const groupes = storedGroupes.filter(groupe => groupe !== groupeDeleted);

    await AsyncStorage.setItem(GROUPE_COLLECTION, JSON.stringify(groupes));
    await AsyncStorage.removeItem('${PLAYER_COLLECTION}-${groupeDeleted}');



} catch (error){
    throw error;


}






}