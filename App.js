import React from "react";
import BottomMenu from "./app/BottomMenu";
import Home from "./app/screen/Home";
import Antrian from "./app/screen/Antrian";
import {User, 
  Receipt21, 
  ArrowRight2, 
  Notification, 
  ScanBarcode, 
  UserSearch, 
  Courthouse,
  Profile2User,
  UserAdd,
  NoteFavorite,
  Math,
  ChemicalGlass,
  Menu
} from "iconsax-react-native";
import {
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  ImageBackground, 
  Image} from "react-native";
import Buletin from "./app/screen/Buletin";
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from "./app/components/BottomNav";
import Login from "./app/screen/Login";
export default function App()
{
  return (
    <NavigationContainer>
      <BottomNav/>
    </NavigationContainer>
  );
}
/*export default function App()
{
  return (
    <NavigationContainer>
      <Login/>
    </NavigationContainer>
  );
}*/

const headerstyle = StyleSheet.create({
  app_bar : {
    justifyContent: "space-between",
    padding: 8,
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