import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 10,
    paddingTop: 40,
  },
  date: {
    flex: 2,
    fontSize: 17,
    height: 50,
    paddingTop: 15,
  },
  brewDaysPicker: {
    flex: 2.3,
    fontSize: 17,
    borderBottomWidth: 0.1,
  },
  reminder: {
    height: 50
  },
  switch: {
    flex: 2
  },
  teaInput: {
    marginLeft: 90,
    flex: 1,
  },
  teaMeasurement: {
    flex: 3.3,
    fontSize: 17
  },
  teaType: {
    borderBottomWidth: 0,
  },
  ingredientLabel: {
    flex: 2,
    width: 100,
  },
  inputCups: {
    marginLeft: 30,
    flex: 0.8,
  },
  cupsText: {
    fontSize: 17,
    flex: 1.9,
    paddingRight: 120
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#59cbbd",
  },
});

export default styles;