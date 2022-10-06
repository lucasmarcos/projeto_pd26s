import { Text, View, FlatList, StyleSheet } from "react-native";

import { PROFESSORES } from "./dados";

const CardProfessor = ({ professor }) => (
  <View style={styles.card}>
    <Text>{professor.nome}</Text>
  </View>
);

export const Professor = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PROFESSORES}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <CardProfessor professor={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 16,
  }
});
