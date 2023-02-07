import { View, StyleSheet } from "react-native";
import { Text } from 'react-native-paper';

export const Header = ({ title }: { title: string }) => {
  
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.headerText}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  headerText: {
    textAlign: "center",
    marginBottom: 12,
  },
});
