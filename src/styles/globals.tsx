import { StyleSheet } from "react-native";

export const stylesComponents = StyleSheet.create({
  containerFather: {
    backgroundColor: "#f3f3f3",
  },

  container: {
    flex: 1,
    gap: 10,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  containerForm: {
    width: "100%",
    margin: 24,
    gap: 12,
  },

  containerTitle: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#f85050",
  },

  subTitulo: {
    fontSize: 18,
    fontWeight: "300",
    color: "#353434",
  },

  illustration: {
    width: "100%",
    height: 330,
  },

  footerText: {
    textAlign: "center",
    marginTop: 24,
    color: "#585860",
  },

  footerLink: {
    color: "#4F6CF3",
    fontWeight: 700,
  },
});
