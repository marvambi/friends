import React from "react";
import { Text, FlatList, Pressable } from "react-native";
import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "../gql/Query";

type ContinentType = {
	continent: {
		name: string
		code: string
	}
}

export default function Countries() {
	const { data, loading } = useQuery(CONTINENT_QUERY);

	const ContinentItem = ({ continent }: ContinentType) => {
		const { name} = continent; 
	
		return (
			<Pressable>
				<Text>{name}</Text>
			</Pressable>
		);
	};

	if (loading) {
		return <Text>Fetching data...</Text>;
	}

	return (
		<FlatList
			data={data.continents}
			renderItem={({ item }) => <ContinentItem continent={item} />}
			keyExtractor={item => item.code}
		/>
	);
}