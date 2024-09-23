import { Image, Text, View } from "react-native";

export function Avatar() {
  return (
    <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 99999,
          borderWidth: 2,
          borderColor: "#1e40af",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: "https://github.com/VagnerNerves.png" }}
          style={{ width: 60, height: 60, objectFit: "cover" }}
        />
      </View>

      <Text style={{ fontSize: 22, fontWeight: "bold", color: "#030712" }}>
        Bem Vindo
      </Text>
    </View>
  );
}
