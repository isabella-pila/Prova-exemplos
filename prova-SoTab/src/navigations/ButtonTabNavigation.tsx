// ./navigation/MeuTabNavigation.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PerfilScreen } from '../screens/Perfil'; 
import { ImagemStackNavigation } from './ImagemStackNavigation'; 
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white,
        headerShown: false,
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name='Menu'
        component={PerfilScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='imagem'
        component={ImagemStackNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="image" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}