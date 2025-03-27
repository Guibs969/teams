import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Loading } from '../components/Loading';
import { StatusBar } from 'react-native';
import { AppRoutes } from '../routes/app.routes';

export default function App  ()  {
 
  const [ fontsLoaded ]  = useFonts({ Roboto_400Regular, Roboto_700Bold});
 
  return (

    <>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
    
    />
    { fontsLoaded  ? <AppRoutes/> : <Loading />}

    </>
  );
}


