import { ScrollView, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context"; /* Importando a biblioteca */

import { Card } from "../components/Card";
import { Avatar } from "../components/Avatar";

export default function Home() {
  const insets = useSafeAreaInsets(); /* Declarando o Hook */

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f8fafc",
        paddingTop: insets.top + 32,
        paddingBottom: insets.bottom /* Aqui a área segura */,
        paddingHorizontal: 16,

        gap: 24,
      }}
    >
      <Avatar />

      <ScrollView style={{ flexGrow: 1 }}>
        <View style={{ gap: 8 }}>
          {Array.from({ length: 10 }).map((i, index) => {
            return <Card key={index} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}
