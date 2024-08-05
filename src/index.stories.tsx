import ReactCountryDropdown from "./index";
import { action } from "@storybook/addon-actions";
import type { Meta } from "@storybook/react";

export default {
	title: "ReactCountryDropdown",
	component: ReactCountryDropdown,
} as Meta;

export const Default = {
	args: {
		defaultCountry: "JP",
		onSelect: action("onSelect"),
	},
};
