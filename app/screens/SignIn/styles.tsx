import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#111C26",
    padding: 10,
  },
  image: {
    minWidth: 300,
  },
  titulo: {
    fontSize: 28,
    paddingVertical: 5,
    fontFamily: "KronaOne-Regular",
    color: "#fff",
  },
  label: {
    color: "#fff",
    fontSize: 18
  },
  inputEmail: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    minWidth: 300,
    marginVertical: 5,
    padding: 15,
    fontSize: 18
  },
  inputPassword: {
    width: "100%",
    minWidth: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 5,
    padding: 5
  },
  input: {
    width: "90%",
    padding: 10,
    borderRadius: 10,
    fontSize: 18
  },
  button: {
    width: "100%",
    alignSelf: "center",
    minWidth: 300,
    padding: 15,
    backgroundColor: "#FF4654",
    borderRadius: 10,
    marginVertical: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default styles;
