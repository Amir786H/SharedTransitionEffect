import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNew from '../screen/HomeNew';  //Dashboard Screen
import Detail from '../screen/Detail'; //Details Screen with description from Json
import {Data} from '../data/data';   //Json data for showing the list items

export type SharedElementStackParamList = {
  Home: undefined;
  Detail: {item: Data};
};

const SharedElementNavigator = () => {
  const Stack = createNativeStackNavigator<SharedElementStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeNew}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
};

export default SharedElementNavigator;
