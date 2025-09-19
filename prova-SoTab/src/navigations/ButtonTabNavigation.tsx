// ./navigation/MeuTabNavigation.js
import { BottomTabNavigationProp, BottomTabNavigatorProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PerfilScreen } from '../screens/Perfil'; 
import { ImagemStackNavigation } from './ImagemStackNavigation'; 
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { IDados } from '../services/data';
import { ScreenLista } from '../screens';
import { ScreenCamera } from '../screens';
import { ListaScreen } from '../screens/Lista';

const Tab = createBottomTabNavigator();
type ImagemParamList = {
    Camera: undefined
    Lista: IDados
}
type ImagemScreenProp = BottomTabNavigationProp<ImagemParamList, 'Camera'>
export type ImagemTypes = {
    navigation: ImagemScreenProp
}
const ImagemStack = createBottomTabNavigator<ImagemParamList>()

export function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white,
         headerStyle: { backgroundColor: colors.primary }, // cor do header, se quiser que ele some colocar false 
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name='Camera'
        component={ScreenCamera}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Lista'
        component={ListaScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}