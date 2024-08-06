import React from "react";
import { getColors } from "react-native-image-colors.ts";

const useImageColors = (url) => {
	const [colors, setColors] = React.useState(null);

	React.useEffect(() => {
		getColors(url, {
			fallback: "#228B22",
			cache: true,
			key: url,
		}).then(setColors);
	}, []);

	return colors;
};
