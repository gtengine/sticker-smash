import { Pressable, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function IconButton({ icon, label, onPress }) {
  return (
    <Pressable style={styles.iconButton}>
      <MaterialIcons name={icon} size={24} onPress={onPress} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
