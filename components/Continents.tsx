import React, { useState } from "react";
import { Text, FlatList, Pressable, View } from "react-native";
import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "../gql/Query";
import Countries, { CountryType, styles } from "./Countries";

type ContinentType = {
	continent: {
		name: string
		code: string
		countries: CountryType
	}
}

export default function Continents() {
	const [modalVisible, setModalVisible] = useState(false);
	const [code, setCode] = useState("AF");
	const [name, setName] = useState("Africa");
	const { data, loading, error } = useQuery(CONTINENT_QUERY);

	const ContinentItem = ({ continent }: ContinentType) => {
		const { name, code } = continent; 
	
		return (
			<Pressable style={styles.item} onPress={() => {setModalVisible(true); setCode(code); setName(name);}}>
				<Text style={styles.header}>{name}</Text>
			</Pressable>
		);
	};

	if (loading) {
		return <Text className="vertical-center h-fit">Fetching Continents...</Text>;
	}
	if (error) return <Text> {error.message}</Text>;

	return (
		<>
			<View style={[styles.button, {width: "90%"}]} className="text-black mt-2">
				<Text style={styles.textStyle} className="text-center">Continents</Text>
			</View>
			<View style={{height: "auto", width: "90%"}} className="bg-gray-200 shadow-md m-1 rounded-md content-center items-center">
				<View style={{height: 4, width: "80%"}} className="bg-gray-400 m-1 rounded-md"/>
				<View style={{height: 2, width: "75%"}} className="bg-gray-400 mb-1 rounded-md"/>
				<View style={{height: 1, width: "65%"}} className="bg-gray-400 mb-1 rounded-md"/>
			</View>
			<FlatList
				data={data.continents}
				renderItem={({ item }) => <ContinentItem continent={item} />}
				keyExtractor={item => item.code}
			/>
			<Countries continent={name} code={code} modalVisible={modalVisible} setModalVisible={setModalVisible} />
		</>
	);
}