import { getColors } from "react-native-image-colors";

const BgGenerator = async (url) => {
  const result = await getColors(url, {
    fallback: "#228B22",
    cache: true,
    key: url,
  });
  if (result) {
    return result;
  }
};
export { BgGenerator };
