import { Button, StyleSheet, View } from "react-native";

export const Home = ({ navigation }) => {
	const makeButton = (route) => (
		<View style={styles.buttonView}>
			<Button title={route} onPress={_ => navigation.navigate(route)}/>
		</View>
	);

	return (
		<View style={styles.container}>
			{makeButton("Aluno")}
			{makeButton("Projeto")}
			{makeButton("Professor")}
			{makeButton("Pesquisa")}
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
