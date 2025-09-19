import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer'

import { colors } from '../styles/colors'

import { IDados } from '../services/data'
import { ScreenCamera, ScreenLista } from '../screens'

//const Drawer = createDrawerNavigator({
 //   initialRouteName: 'Meu',
  //  screens: {
   //     Meu: BottomTabNavigation
 //   }
//})

type ImagemParamList = {
    Camera: undefined
    Lista: IDados
}
type ImagemScreenProp = DrawerNavigationProp<ImagemParamList, 'Camera'>
export type ImagemTypes = {
    navigation: ImagemScreenProp
}
const Drawer = createDrawerNavigator<ImagemParamList>()

export function MainDrawerNavigation() {
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: colors.white,
            drawerStyle: {
                backgroundColor: colors.primary,
            },
            drawerActiveTintColor: colors.white,
            drawerInactiveTintColor: colors.white
        }}>
            <Drawer.Screen component={ScreenCamera} name='Camera' />
            <Drawer.Screen component={ScreenLista} name='Lista' />
        </Drawer.Navigator>
    )
}
