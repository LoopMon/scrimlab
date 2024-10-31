import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#111C26",
    padding: 10
  },
  image: {
    maxHeight: 100,
  },
  titulo: {
    width: "100%",
    fontSize: 28,
    fontFamily: "KronaOne-Regular",
    paddingVertical: 10,
    color: "#fff",
  },
  label: {
    color: "#fff",
    fontSize: 18
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    minWidth: 300,
    padding: 15,
    marginVertical: 5,
  },
  buttonActive: {
    width: "100%",
    minWidth: 300,
    padding: 15,
    backgroundColor: "#FF4654",
    borderRadius: 10,
    marginVertical: 15,
  },
  buttonDesactive: {
    width: "100%",
    minWidth: 300,
    padding: 15,
    backgroundColor: "#999",
    borderRadius: 10,
    marginVertical: 15,
  },
});

export default styles;
