import React from "react";
import { GluestackUIProvider, Text, Box, config, Divider, VStack, HStack } from "@gluestack-ui/react";

export default function Profile() {
	
	return (
		<GluestackUIProvider config={config.theme}>

			<VStack
				space="md"
				justifyContent="center"
				alignItems="center">
				<Box minWidth="80%" justifyContent="center" alignItems="center" backgroundColor="cyan" borderTopLeftRadius={20} borderTopRightRadius={20} marginRight={5} marginLeft={5}>
					<Text size={"2xl"} padding={2} bold={"true"}>Open up profile.tsx to start working on this component!</Text>
					<Divider my={"$2.5"} h={2.5} />
					<Text>Difficult</Text>
				</Box>
				<HStack
					h={"$10"}
					justifyContent="center"
					alignItems="center"
				>
					<Text>Simple</Text>
					<Divider
						orientation="vertical"
						mx='$2.5'
						bg="$emerald500"
						h={15}
						sx={{
							_dark: {
								bg: "$emerald400",
							},
						}}
					/>
					<Text>Easy</Text>
					<Divider
						orientation="vertical"
						mx='$2.5'
						bg="$indigo500"
						h={15}
						sx={{
							_dark: {
								bg: "$indigo400",
							},
						}}
					/>
					<Text>Beautiful</Text>
				</HStack>
				<VStack
					w={100}
					justifyContent="center"
					alignItems="center">

					<Text>Firefox</Text>
					<Divider
						w={55}
						variant="horizontal"
						sx={{
							bg: "$red500",
							_dark: {
								bg: "$red400",
							},
						}}
					/>
					<Text>Chrome</Text>
				</VStack>
			</VStack>
				
			{/* <Box minWidth="80%" justifyContent="center" alignItems="center" backgroundColor="cyan" borderTopLeftRadius={20} borderTopRightRadius={20} marginRight={5} marginLeft={5}>
				<Text size={"2xl"} padding={2} bold={"true"}>Open up profile.tsx to start working on this component!</Text>
				<Divider my={"$2.5"} h={2.5} />
				<Text>Difficult</Text>
			</Box> */}
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
