import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigation } from "./ButtonTabNavigation";
import { LoginStackNavigation } from "./LoginStackNavigation";
import { useState } from "react";
import { useAuth } from "../context/auth";
import { ImagemStackNavigation } from "./ImagemStackNavigation";

export function Navigation() {
   // const {login} = useAuth()
    return (
        <NavigationContainer>
          {/* {login ? <MainDrawerNavigation /> : <LoginStackNavigation />} */} 
            <BottomTabNavigation />
            
            {/*<ImagemStackNavigation />*/} {/* so stack excluir o arquivo buttontab */}
        </NavigationContainer>
    )


}