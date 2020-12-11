import React from 'react';
import '../src/css/style.scss';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './modules/main/Main';
import Contact from './modules/contact/Contact';
import UserAgreement from './modules/UserAgreement';
import PrivacyPolicy from './modules/PrivacyPolicy';
import Disclaimer from './modules/Disclaimer';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="UserAgreement" component={UserAgreement} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Disclaimer" component={Disclaimer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
