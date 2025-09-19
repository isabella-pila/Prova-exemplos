import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image // 👈 1. Importe o componente Image
} from "react-native";
import { ComponentButtonInterface } from "../components";
import { ImagemTypes } from "../navigations/ImagemStackNavigation";
import { dados, IDados } from "../services/data";
import { colors } from "../styles/colors";

export function CameraScreen({ navigation }: ImagemTypes) {
  const renderItem = ({ item }: { item: IDados }) => (
    // O container do item agora é um dos "quadradinhos"
    <View style={styles.itemContainer}>
      {/* 👇 2. Adicione o componente Image aqui */}
      <Image source={item.img} style={styles.itemImage} /> 

      <Text style={styles.itemTitle}>
        {item.banda}
      </Text>
      <ComponentButtonInterface 
        title="Detalhes" 
        type="primary" 
        onPress={() => navigation.navigate("Lista", item)} 
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        renderItem={renderItem}
        keyExtractor={(i) => i.id}
        // 👇 3. Adicione numColumns para criar a grade
        numColumns={2} 
        ListHeaderComponent={<Text style={styles.title}>Ver discos</Text>}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum disco registrado.</Text>}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white, // Um fundo para a tela
  },
  itemContainer: {
    flex: 1, // Faz com que cada item ocupe o espaço da coluna
    margin: 5, // Espaçamento entre os quadradinhos
    padding: 10,
    alignItems: 'center', // Centraliza o conteúdo
    backgroundColor: colors.secondary,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.black,
  },
  // ✨ Novo estilo para a imagem
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16, // Fonte um pouco menor para caber
    fontWeight: "bold",
    color: colors.black,
    textAlign: 'center', // Centraliza o texto
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 10, // Menos margem para ficar mais perto da grade
    textAlign: "center",
  },
  emptyText: {
    fontSize: 16,
    color: colors.black,
    textAlign: "center",
    marginTop: 50,
  },
});