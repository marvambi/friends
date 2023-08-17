import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { Text, View } from "../../components/Themed";
import Continents from "../../components/Continents";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.forEach(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
			)
		);
	if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({ uri: "https://countries.trevorblades.com/graphql" });

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: from([errorLink, httpLink]),
});

export default function TabOneScreen() {
	return (
		<ApolloProvider client={client}>
			<SafeAreaView style={styles.container}>
				<Text style={styles.title}>Interesting Places...</Text>
				<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
				<Continents />
			</SafeAreaView>
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
		verticalAlign: "middle"
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
