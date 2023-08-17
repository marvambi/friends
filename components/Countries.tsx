import React from "react";
import { StyleSheet, Text, FlatList, Pressable, Modal, View, SafeAreaView} from "react-native";
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

export default function Countries (props: { continent: string; code: string; modalVisible: boolean | undefined; setModalVisible: (arg0: boolean) => void; }) {
	const { data, loading } = useQuery(COUNTRY_QUERY, {
		variables: {
			"code": props.code,
			"continent": props.continent,
		}
	});

	if (loading) {
		return <Text>Fetching countries data...</Text>;
	}

	return (
		<SafeAreaView>
			<Modal
				animationType="slide"
				transparent={true}
				visible={props.modalVisible}
				onRequestClose={() => {
					props.setModalVisible(!props.modalVisible);
				}}
			>
				<View style={styles.container} className="bg-gray-100 pb-2">
					<View style={styles.modalView}>
						<View style={[styles.button, {width: "90%"}]} className="text-black mt-2">
							<Text style={styles.textStyle} className="text-center">Countries in {props.continent}</Text>
						</View>
						<View style={{height: 4, width: "80%"}} className="bg-gray-400 m-1 rounded-md"/>
						<View style={{height: 2, width: "75%"}} className="bg-gray-400 mb-1 rounded-md"/>
						<View style={{height: 1, width: "65%"}} className="bg-gray-400 mb-1 rounded-md"/>
						<FlatList
							data={data.continent.countries}
							renderItem={({ item }) => <CountryItem country={item} />}
							keyExtractor={(item) => item.code}
						/>
						<Pressable style={styles.button} className="text-black mt-2" onPress={() => props.setModalVisible(!props.modalVisible)}>
							<Text style={styles.textStyle}>CLOSE</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
}

export const styles = StyleSheet.create({
	container: {
		paddingTop:40,
		paddingLeft:20,
		paddingRight: 20,
		minHeight: "90%"
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
		minWidth:"90%",
		height:"auto",
		backgroundColor: "white",
		borderRadius: 20,
		position: "relative",
		marginHorizontal: "auto",
		marginVertical: "auto",
		justifyContent: "space-around",
		alignItems: "center",
		verticalAlign: "middle",
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
		backgroundColor: "darkgrey"
	},
	textStyle: {
		fontSize: 22,
		color: "white"
	}
});