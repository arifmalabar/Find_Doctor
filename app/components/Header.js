import React from "react"
import {
    View, 
    Text, 
    ScrollView, 
    StyleSheet, 
    ImageBackground, 
    Image} from "react-native"
const Header = () => {
    return (
        <View style={headerstyle.app_bar}>
          <View style={headerstyle.user_option}>
              <Text style={{fontWeight: "bold", fontSize: 18, color: "black"}}>Hello, Ridho Arif</Text>
              <Text>NoRm 082323444</Text>
          </View>
          <View>
            <Image
              style={{height: 50, width: 50, borderRadius: 40, borderColor: "#1873ac", borderWidth: 3}}
              imageStyle={{ height: 10, width: 10}}
              source={require('../../assets/account.jpeg')}
            />
          </View>
        </View>
    );
}
const headerstyle = StyleSheet.create({
    app_bar : {
      justifyContent: "space-between",
      padding: 10,
      flexDirection: "row", 
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 1,
    },
    user_option : {
      flexDirection: "column",
    },
    foto_user : {
      borderRadius: 50,
      padding: 12,
      backgroundColor: "#1872ae"
    }
});
export default Header;