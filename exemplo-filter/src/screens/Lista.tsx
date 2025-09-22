import { StyleSheet, Text, View, Image } from "react-native"; // Adicione o Image

import { useRoute } from "@react-navigation/native";
import { ComponentButtonInterface } from "../components";
import { IDados } from "../services/data";
import { colors } from "../styles/colors"; // Supondo que você tenha cores definidas
import { ImagemTypes } from "../navigations/ImagemStackNavigation";
export function ListaScreen({ navigation }: ImagemTypes
    
 ) {
    const route = useRoute();
    const disco = route.params as IDados;

    return (
        <View style={styles.container}>
            {/* 🖼️ Adicionamos a imagem do álbum no topo */}
            <Image source={disco.img} style={styles.albumArt} />

            {/* ✨ Um "card" para agrupar as informações */}
            <View style={styles.card}>
                <Text style={styles.title}>{disco.banda}</Text>
                <Text style={styles.subtitle}>{disco.album}</Text>

                <View style={styles.detailsContainer}>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Ano:</Text>
                        <Text style={styles.detailValue}>{disco.ano}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Proprietário:</Text>
                        <Text style={styles.detailValue}>{disco.user.name}</Text>
                    </View>
                </View>

                {/* Um indicador de status mais visual */}
                <View style={styles.statusContainer}>
                    <Text style={styles.detailLabel}>Disponível: </Text>
                    <View style={[
                        styles.statusBadge,
                        disco.user.disponivel ? styles.statusAvailable : styles.statusUnavailable
                    ]}>
                        <Text style={styles.statusText}>
                            {disco.user.disponivel ? "Sim" : "Não"}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <ComponentButtonInterface 
                    type="primary" 
                    title="Voltar para a coleção"
                    onPress={() => navigation.navigate("Camera")}
                />
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f2f5', // Um cinza bem claro para o fundo
        alignItems: "center",
        padding: 20,
    },
    albumArt: {
        width: 250,
        height: 250,
        borderRadius: 12,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: '#fff',
    },
    card: {
        backgroundColor: '#ffffff', // Card branco
        borderRadius: 12,
        padding: 20,
        width: '100%',
        // Sombra para dar profundidade (iOS)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Sombra para Android
        elevation: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1c1c1c',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    detailsContainer: {
        marginBottom: 15,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    detailLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    detailValue: {
        fontSize: 16,
        color: '#555',
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    statusBadge: {
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 15,
        marginLeft: 10,
    },
    statusAvailable: {
        backgroundColor: '#d4edda', // Verde claro
    },
    statusUnavailable: {
        backgroundColor: '#f8d7da', // Vermelho claro
    },
    statusText: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 'auto', // Empurra o botão para o final
        paddingTop: 20,
    }
});