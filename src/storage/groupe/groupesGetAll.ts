import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUPE_COLLECTION } from '../storageConfig';


export async function groupesGetAll(){
try {
    const storage = await AsyncStorage.getItem(GROUPE_COLLECTION);

    const groupes: string[] = storage ? JSON.parse(storage) : [];

    return groupes;

} catch(error){
    throw error;

}
}