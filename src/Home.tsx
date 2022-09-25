import { Button, StyleSheet, View } from "react-native";

export const Home = ({ navigation }) => {
  const NavButton = ({ route }) => {
    return (
      <View style={styles.buttonView}>
        <Button title={route} onPress={_ => navigation.navigate(route)}/>
      </View>
    );
  };

	return (
		<View style={styles.container}>
			<NavButton route="Login"/>
			<NavButton route="Cadastro"/>
			<NavButton route="Aluno"/>
			<NavButton route="Projeto"/>
			<NavButton route="Professor"/>
			<NavButton route="Pesquisa"/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	buttonView: {
		padding: 16,
	},
});
