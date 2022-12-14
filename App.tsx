import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./src/Home";
import { Login } from "./src/Login";
import { Cadastro } from "./src/Cadastro";
import { Aluno } from "./src/Aluno";
import { Professor } from "./src/Professor";
import { Projeto } from "./src/Projeto";
import { Pesquisa } from "./src/Pesquisa";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen options={{ header: () => <></> }} name="Login" component={Login} />
        <Stack.Screen options={{ header: () => <></> }} name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Aluno" component={Aluno} />
        <Stack.Screen name="Professor" component={Professor} />
        <Stack.Screen name="Projeto" component={Projeto} />
        <Stack.Screen name="Pesquisa" component={Pesquisa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
