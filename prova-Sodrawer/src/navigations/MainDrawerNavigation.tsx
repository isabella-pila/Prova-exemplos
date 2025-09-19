// ./navigation/MainDrawerNavigation.js

import { createDrawerNavigator } from '@react-navigation/drawer';
import { PerfilScreen } from '../screens/Perfil'; 
import { ImagemStackNavigation } from './ImagemStackNavigation';
import { colors } from '../styles/colors';

// A correção está aqui! Adicione os parênteses ().
const Drawer = createDrawerNavigator();

export function MainDrawerNavigation() {
  return (
   
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
        drawerStyle: {
          backgroundColor: colors.primary,
        },
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.white,
      }}
    >
      <Drawer.Screen component={PerfilScreen} name='Perfil' />
      <Drawer.Screen component={ImagemStackNavigation} name='Imagem' />
    </Drawer.Navigator>
  );
}