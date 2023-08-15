import React from "react";
import { GluestackUIProvider, Text, Box, config } from "@gluestack-ui/react";

export default function Profile() {
	
	return (
		<GluestackUIProvider config={config.theme}>
			<Box minWidth="80%" justifyContent="center" alignItems="center" backgroundColor="cyan" borderTopLeftRadius={20} borderTopRightRadius={20} marginRight={5} marginLeft={5}>
				<Text size={"2xl"} padding={2} bold={"true"}>Open up profile.tsx to start working on this component!</Text>
				<Text>Difficult</Text>
			</Box>
		</GluestackUIProvider>
	);
}

// export default function App() {
// 	return (
// 		<View className={"flex-1 items-center justify-center bg-yellow-200"}>
// 			<Text>Open up profile.tsx to start working on your app!</Text>
// 			<StatusBar style="auto" />
// 		</View>
// 	);
// }
