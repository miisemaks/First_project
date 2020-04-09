import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {Login} from '../screen/Capitan/Login'
import {TimeTable} from '../screen/Capitan/TimeTable'

const Stack = createStackNavigator()

export const CapitanNavigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TimeTable" component={TimeTable} options={{title:'Расписание'}} />
        <Stack.Screen name="Login" component={Login} options={{title:'Вход'}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}