import { NavigationContainer } from "@react-navigation/native";
import { MainDrawerNavigation } from "./MainDrawerNavigation";
import { LoginStackNavigation } from "./LoginStackNavigation";
import { useState } from "react";
import { useAuth } from "../context/auth";
import { ImagemStackNavigation } from "./ImagemStackNavigation";

export function Navigation() {
   // const {login} = useAuth()
    return (
        <NavigationContainer>
          {/* {login ? <MainDrawerNavigation /> : <LoginStackNavigation />} */}
            <MainDrawerNavigation />
            
            {/*<ImagemStackNavigation />*/} {/* para so o stack ai precisa excluir o mainDrawerNavigation */}
        </NavigationContainer>
    )


}