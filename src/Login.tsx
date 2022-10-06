import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const entrar = async (usuario, senha) => {
  const u = await signInWithEmailAndPassword(auth, usuario, senha);
  console.log(u);
};

const Usuario = ({ usuario, setUsuario }) => {
  return (
    <View>
      <Text>Usuário</Text>
      <TextInput value={usuario} onChangeText={setUsuario} />
    </View>
  );
};

const Senha = ({ senha, setSenha }) => (
  <View>
    <Text>Senha</Text>
    <TextInput value={senha} onChangeText={setSenha} />
  </View>
);

const Botao = ({ callback }) => (
  <View>
    <Button title="Entrar" onPress={callback} />
  </View>
);

export const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <Usuario usuario={usuario} setUsuario={setUsuario} />
      <Senha senha={senha} setSenha={setSenha} />
      <Botao callback={() => entrar(usuario, senha)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
  },
});
