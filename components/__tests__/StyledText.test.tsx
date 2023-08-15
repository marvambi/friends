import { MonoText } from "../StyledText";
import { render, screen } from "@testing-library/react-native";

it(`renders correctly`, () => {
	render(<MonoText>Hi</MonoText>);
	expect(screen.getByText("Hi")).toBeTruthy();
});