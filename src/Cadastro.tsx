import { useState } from "react";
import { Text, TextInput, Button, View, StyleSheet } from "react-native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const cadastrar = async (email, senha) => {
  const u = await createUserWithEmailAndPassword(auth, email, senha);
  console.log(u);
};

const Nome = ({ nome, setNome }) => (
  <View>
    <Text>Nome</Text>
    <TextInput value={nome} onChangeText={setNome} />
  </View>
);

const Usuario = ({ usuario, setUsuario }) => (
  <View>
    <Text>Usuario</Text>
    <TextInput value={usuario} onChangeText={setUsuario} />
  </View>
);

const Senha = ({ senha, setSenha }) => (
  <View>
    <Text>Senha</Text>
    <TextInput value={senha} onChangeText={setSenha} />
  </View>
);

const BotaoCadastrar = ({ callback }) => (
  <View>
    <Button title="Cadastrar" onPress={callback} />
  </View>
);

export const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <Nome nome={nome} setNome={setNome} />
      <Usuario usuario={usuario} setUsuario={setUsuario} />
      <Senha senha={senha} setSenha={setSenha} />
      <BotaoCadastrar callback={() => cadastrar(usuario, senha)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
  },
});
