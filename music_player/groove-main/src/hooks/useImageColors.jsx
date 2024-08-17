import React from "react";
import { getColors } from "react-native-image-colors";

const useImageColors = (url) => {
  const [colors, setColors] = React.useState(null);

  React.useEffect(async () => {
    await getColors(url, {
      fallback: "#228B22",
      cache: true,
      key: url,
    }).then(setColors);
  }, []);
  return colors;
};

export { useImageColors };
