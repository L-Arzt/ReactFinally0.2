import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import ScreenHome from '../screens/ScreenHome'
import ScreenNews from '../screens/ScreenNews'
import ScreenWeather from '../screens/ScreenWeather'


export const Navigator = ()  => {

    const Stack = createStackNavigator();

    return(
    
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Главная страница" component={ScreenHome} />
        <Stack.Screen name="Новости" component={ScreenNews} />
        <Stack.Screen name="Погода" component={ScreenWeather} />

      </Stack.Navigator>
    );
};
