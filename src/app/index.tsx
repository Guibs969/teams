import { Groupes } from '../screens/Groupes';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Loading } from '../components/Loading';
import { NewGroupe } from '../screens/NewGroupe';
import { Players } from '../screens/Players';
import { StatusBar } from 'react-native';

export default function App  ()  {
 
  const [ fontsLoaded ]  = useFonts({ Roboto_400Regular, Roboto_700Bold});
 
  return (

    <>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
    
    />
    { fontsLoaded  ? <Players /> : <Loading />}

    </>
  );
}


