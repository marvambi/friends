import React from "react";
import { StyleSheet } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Text, View } from "../../components/Themed";
import Countries from "../../components/Countries";


// Initialize Apollo Client
const client = new ApolloClient({
	uri: "https://countries.trevorblades.com/graphql",
	cache: new InMemoryCache()
});


export default function TabOneScreen() {
	return (
		<ApolloProvider client={client}>
			<View style={styles.container}>
				<Text style={styles.title}>Interesting Countries for People</Text>
				<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
				<Countries />
			</View>
		</ApolloProvider>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
