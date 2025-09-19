import { View, Text } from "react-native";
import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { ComponentButtonInterface } from "../../components";
import { useAuth } from "../../context/auth";

export function PerfilScreen() {
    const {setLogin} = useAuth()
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>Lázaro</Text>
            </View>
            <View>
                <View style={styles.sociais}>
                    <FontAwesome5 name="facebook" size={24} color="black" />
                    <Text style={styles.sociaisText}>https://www.facebook.com/</Text>
                </View>
                <View style={styles.sociais}>
                    <FontAwesome5 name="instagram" size={24} color="black" />
                    <Text style={styles.sociaisText}>https://www.instagram.com/</Text>
                </View>
                <View style={styles.sociais}>
                    <FontAwesome5 name="linkedin" size={24} color="black" />
                    <Text style={styles.sociaisText}>https://www.linkedin.com/</Text>
                </View>
            </View>
          {/*<ComponentButtonInterface title="Sair" type="primary" onPress={() => setLogin(false)} />*/}  
        </View>
    )
}
