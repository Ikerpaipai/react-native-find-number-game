import { Dimensions, StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/colors"

const NumberContainer = ({children}) => {
  return(
    <View style={styles.constainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  constainer: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
  }
})