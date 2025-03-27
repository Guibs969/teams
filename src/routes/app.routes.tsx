import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Groupes } from '../screens/Groupes';
import { Players } from '../screens/Players';
import { NewGroupe } from '../screens/NewGroupe';


const { Navigator, Screen } = createNativeStackNavigator();


export function AppRoutes() {


    return (

            <Navigator screenOptions={{ headerShown: false }}>


            <Screen
                name='Groupes'
                component={Groupes}
            />


            <Screen
                name='NewGroupe'
                component={NewGroupe}
            />




            <Screen
                name='Players'
                component={Players}
                
            />


            </Navigator>



   )
}
