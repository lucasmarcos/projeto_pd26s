import { initializeApp } from "firebase/app";

import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./src/Home";
import { Aluno } from "./src/Aluno";
import { Professor } from "./src/Professor";
import { Projeto } from "./src/Projeto";
import { Pesquisa } from "./src/Pesquisa";

const firebase = initializeApp({
  apiKey: "AIzaSyAxd7thAZ3lT6qJaWSL0EcFnyamR1m0Giw",
  authDomain: "pd26s-ad736.firebaseapp.com",
  projectId: "pd26s-ad736",
  storageBucket: "pd26s-ad736.appspot.com",
  messagingSenderId: "667563279286",
  appId: "1:667563279286:web:b3ad8fb1fd6159fb433717"
});

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Aluno" component={Aluno}/>
        <Stack.Screen name="Professor" component={Professor}/>
        <Stack.Screen name="Projeto" component={Projeto}/>
        <Stack.Screen name="Pesquisa" component={Pesquisa}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
