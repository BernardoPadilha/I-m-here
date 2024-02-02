import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#131016",
    paddingVertical: 60,
    paddingHorizontal: 24,
  },

  eventName: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },

  eventDate: {
    color: "#6b6b6b",
    fontSize: 14,
  },

  input: {
    flex: 1,
    color: "#fdfcfe",
    fontSize: 16,
    padding: 14,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1F1E25",
  },

  buttonText: {
    color: "#fdfcfe",
    fontSize: 32,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    width: "100%",
    marginTop: 36,
    marginBottom: 36,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "flex-start",
  },
});
