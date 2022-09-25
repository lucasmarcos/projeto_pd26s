import { View, Text, TextInput, Button } from "react-native";

const Usuario = () =>
  <View>
    <Text>Usuário</Text>
    <TextInput />
  </View>;

const Senha = () =>
  <View>
    <Text>Senha</Text>
    <TextInput />
  </View>;

const Botao = () =>
  <View>
    <Button title="Entrar" />
  </View>;

export const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <Usuario />
      <Senha />
      <Botao />
    </View>
  );
};
