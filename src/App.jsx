import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
	  <Button
	    title="Go to details"
	    onPress={_ => navigation.navigate("Details")}
	  />
    </View>
  );
};

const Details = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "green" }}>
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
