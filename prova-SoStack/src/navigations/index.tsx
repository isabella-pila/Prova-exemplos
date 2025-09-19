import { NavigationContainer } from "@react-navigation/native";

import { useState } from "react";
import { useAuth } from "../context/auth";
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