import { View, Text } from "react-native";

const PROJETOS = new Map([
  [1, { nome: "Projeto 1" }],
  [2, { nome: "Projeto 2" }],
  [3, { nome: "Projeto 3" }],
  [4, { nome: "Projeto 4" }],
  [5, { nome: "Projeto 5" }],
]);

const ProjetoCard = ({ projeto }) => (
  <View>
    <Text>{projeto.nome}</Text>
  </View>
);

export const Projeto = () => {
  return (
    <View style={{ flex: 1 }}>
      {[...PROJETOS].map(([k, v]) => (
        <ProjetoCard key={k} projeto={v} />
      ))}
    </View>
  );
};
