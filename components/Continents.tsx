import React, { useState } from "react";
import { Text, FlatList, Pressable } from "react-native";
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
	const { data, loading } = useQuery(CONTINENT_QUERY);

	const ContinentItem = ({ continent }: ContinentType) => {
		const { name, code } = continent; 
	
		return (
			<Pressable style={styles.item} onPress={() => {setModalVisible(true); setCode(code);}}>
				<Text style={styles.header}>{name}</Text>
			</Pressable>
		);
	};

	if (loading) {
		return <Text>Fetching data...</Text>;
	}

	return (
		<>
			<FlatList
				data={data.continents}
				renderItem={({ item }) => <ContinentItem continent={item} />}
				keyExtractor={item => item.code}
			/>
			<Countries code={code} modalVisible={modalVisible} setModalVisible={setModalVisible} />
		</>
	);
}