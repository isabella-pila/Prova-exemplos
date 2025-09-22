import { NavigationContainer } from "@react-navigation/native";
import { ImagemStackNavigation } from "./ImagemStackNavigation";

export function Navigation() {
   // const {login} = useAuth()
    return (
        <NavigationContainer>
          {/* {login ? <MainDrawerNavigation /> : <LoginStackNavigation />} */}
            
            <ImagemStackNavigation />
        </NavigationContainer>
    )


}