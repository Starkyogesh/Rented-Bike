
import React,{useEffect} from 'react';
import { View, Text, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createTab } from './LogReg/SqlData';

import LoginP from './LogReg/LoginScreen';
import RegP from './LogReg/RegScreen';
import Homes from './Sheets/Home';
import Abt from './Sheets/AboutScreen';
import Info from './Sheets/InfoScreen';
import Code from './Sheets/SourceScreen';

const Stack = createNativeStackNavigator();

const App =()=>{

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginPage'>
        <Stack.Screen name='LoginPage' component={LoginP} options={{title:"Welcome"}}/>
        <Stack.Screen name='SignPage' component={RegP} options={{title:"Back"}}/>
        <Stack.Screen name='Home' component={Homes}/>
        <Stack.Screen name='Abouts' component={Abt}/>
        <Stack.Screen name='Infos' component={Info} options={{title:"Details"}}/>
        <Stack.Screen name='codes' component={Code} options={{title:"Source Code"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;