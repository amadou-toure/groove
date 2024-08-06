import React from "react";
import { getColors } from "react-native-image-colors";

const useImageColors = () => {
  const [colors, setColors] = React.useState(null);

  React.useEffect(() => {
    const url = "https://i.imgur.com/68jyjZT.jpg";

    getColors(url, {
      fallback: "#228B22",
      cache: true,
      key: url,
    }).then(setColors);
  }, []);

  return colors;
};
export { useImageColors };
