import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import { LoginScreen } from "../screens/Login"
import { RegisterScreen } from "../screens/Register"
import { StaticParamList } from "@react-navigation/native"

const LoginStack = createNativeStackNavigator({
    screens: {
        Login: LoginScreen,
        Register: RegisterScreen
    }
})
type LoginStackParamList = StaticParamList<typeof LoginStack>
type LoginScreenProp = NativeStackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
    navigation: LoginScreenProp
}
export function LoginStackNavigation() {
    return (
        <LoginStack.Navigator screenOptions={{ headerShown: false }}>
            <LoginStack.Screen name="Login" component={LoginScreen} />
            <LoginStack.Screen name="Register" component={RegisterScreen} />
        </LoginStack.Navigator>
    )
}