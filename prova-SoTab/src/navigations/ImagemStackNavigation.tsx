import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ScreenCamera, ScreenLista } from "../screens"
import { StaticParamList } from "@react-navigation/native"
import {IDados} from "../services/data"

type ImagemParamList = {
    Camera: undefined
    Lista: IDados
}
type ImagemScreenProp = NativeStackNavigationProp<ImagemParamList, 'Camera'>
export type ImagemTypes = {
    navigation: ImagemScreenProp
}
const ImagemStack = createNativeStackNavigator<ImagemParamList>()
export function ImagemStackNavigation() {
    return (
        <ImagemStack.Navigator screenOptions={{ headerShown: false }}>
            <ImagemStack.Screen name="Camera" component={ScreenCamera} />
            <ImagemStack.Screen name="Lista" component={ScreenLista} />
        </ImagemStack.Navigator>
    )
}