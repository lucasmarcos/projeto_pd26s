import {
  View,
  Text,
  FlatList,
  PlatformColor,
  TouchableHighlight,
  StyleSheet,
} from "react-native";

const ALUNOS = new Map([
  [1, { nome: "Aluno 1" }],
  [2, { nome: "Aluno 2" }],
  [3, { nome: "Aluno 3" }],
  [4, { nome: "Aluno 4" }],
  [5, { nome: "Aluno 5" }],
  [6, { nome: "Aluno 6" }],
  [7, { nome: "Aluno 7" }],
  [8, { nome: "Aluno 8" }],
  [9, { nome: "Aluno 9" }],
  [10, { nome: "Aluno 10" }],
  [11, { nome: "Aluno 11" }],
  [12, { nome: "Aluno 12" }],
  [13, { nome: "Aluno 13" }],
  [14, { nome: "Aluno 14" }],
  [15, { nome: "Aluno 15" }],
]);

const AlunoCard = ({ aluno }) => {
  return (
    <TouchableHighlight style={styles.card}>
      <Text>{aluno.nome}</Text>
    </TouchableHighlight>
  );
};

export const Aluno = () => {
  return (
    <View>
      <FlatList
        data={[...ALUNOS]}
        renderItem={({ item: [k, v] }) => <AlunoCard aluno={v} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 128,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    padding: 16,
    backgroundColor: PlatformColor("@android:color/darker_gray"),
  },
});
