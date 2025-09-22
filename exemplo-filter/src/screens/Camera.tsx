// 1. Importe o que precisamos: useState, useEffect e TextInput
import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput // Adicionado!
} from "react-native";
import { ComponentButtonInterface } from "../components";
import { ImagemTypes } from "../navigations/ImagemStackNavigation";
import { dados, IDados } from "../services/data";
import { colors } from "../styles/colors";

export function CameraScreen({ navigation }: ImagemTypes) {
  // 2. Criamos dois estados: um para o texto da busca e outro para os dados filtrados
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(dados);

  // 3. Este useEffect será executado sempre que o texto da busca (searchQuery) mudar
  useEffect(() => {
    // Se a busca estiver vazia, mostramos todos os dados originais
    if (searchQuery === '') {
      setFilteredData(dados);
    } else {
      // Se tiver algo digitado, filtramos o array 'dados'
      const newData = dados.filter(item => {
        // Unimos os dados do item em uma string para facilitar a busca
        const itemData = `${item.banda.toUpperCase()} ${item.album ? item.album.toUpperCase() : ''}`;
        const textData = searchQuery.toUpperCase();
        
        // Retornamos true se o texto da busca estiver contido nos dados do item
        return itemData.indexOf(textData) > -1;
      });
      // Atualizamos o estado dos dados filtrados com o resultado
      setFilteredData(newData);
    }
  }, [searchQuery]); // O array de dependências faz o useEffect rodar apenas quando searchQuery muda

  const renderItem = ({ item }: { item: IDados }) => (
    <View style={styles.itemContainer}>
      <Image source={item.img} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.banda}</Text>
      <ComponentButtonInterface
        title="Detalhes"
        type="primary"
        onPress={() => navigation.navigate("Lista", item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 4. Adicionamos o TextInput para o usuário digitar a busca */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por banda ou álbum..."
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <FlatList
        // 5. A FlatList agora renderiza os dados do estado 'filteredData'
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(i) => i.id}
        numColumns={2}
        ListHeaderComponent={<Text style={styles.title}>Minha Coleção</Text>}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum disco encontrado.</Text>}
      />
    </View>
  );
}


export const styles = StyleSheet.create({
  // ... (todos os seus outros estilos como container, itemContainer, etc.)
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

  searchInput: {
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15, // Espaço entre a busca e a lista
  },

  // ... (o resto dos seus estilos)
});



