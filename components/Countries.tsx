import React from "react";
import { StyleSheet, Text, FlatList, Pressable, Modal, View} from "react-native";
import { useQuery } from "@apollo/client";
import { COUNTRY_QUERY } from "../gql/Query";


export type CountryType = {
	country: {
		name: string
		code: string
	}
}
const CountryItem = ({ country }: CountryType) => {
	const { name } = country;
	return (
		<Pressable style={styles.item}>
			<Text style={styles.header}>{name}</Text>
		</Pressable>
	);
};

export default function Countries (props: { code: string; modalVisible: boolean | undefined; setModalVisible: (arg0: boolean) => void; }) {
	const { data, loading } = useQuery(COUNTRY_QUERY, {
		variables: {
			"code": props.code,
		}
	});

	if (loading) {
		return <Text>Fetching countries data...</Text>;
	}

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={props.modalVisible}
			onRequestClose={() => {
				props.setModalVisible(!props.modalVisible);
			}}
		>
			<View style={styles.container}>
				<View style={styles.modalView}>
					<FlatList
						data={data.continent.countries}
						renderItem={({ item }) => <CountryItem country={item} />}
						keyExtractor={(item) => item.code}
					/>
					<Pressable style={styles.button} onPress={() => props.setModalVisible(!props.modalVisible)}>
						<Text style={styles.textStyle}>CLOSE</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
}

export const styles = StyleSheet.create({
	container: {
		paddingTop:40,
		paddingLeft:20,
		paddingRight: 20
	},
	item: {
		paddingTop: 16,
		paddingBottom: 16,
		paddingLeft: 20,
		paddingRight: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
	},
	header: {
		fontWeight: "bold",
		fontSize: 16
	},
	title:{
		fontWeight: "bold",
		fontSize: 20
	},
	modalView: { 
		width:"90%",
		height:"50%",
		backgroundColor: "white",
		borderRadius: 20,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		paddingBottom:10
	},
	button: {
		borderRadius: 10,
		padding: 5,
		elevation: 2,
		backgroundColor: "lightgrey"
	},
	textStyle: {
		fontSize: 22,
	}
});