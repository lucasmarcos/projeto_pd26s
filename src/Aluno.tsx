import { View, Text, StyleSheet } from "react-native";

const ALUNOS = new Map([
  [1, { nome: "Aluno 1", }],
  [2, { nome: "Aluno 2", }],
  [3, { nome: "Aluno 3", }],
  [4, { nome: "Aluno 4", }],
  [5, { nome: "Aluno 5", }],
]);

const AlunoCard = ({ aluno }) => {
  return (
    <View style={styles.card}>
      <Text>{aluno.nome}</Text>
    </View>
  );
};

export const Aluno = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Lista de alunos</Text>
      {[...ALUNOS].map(([k, v]) => <AlunoCard key={k} aluno={v} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
});
