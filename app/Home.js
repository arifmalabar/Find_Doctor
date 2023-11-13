import React from "react";
import style from "./style/style";
import {View, Text, ScrollView, StyleSheet, Button, AppBar} from "react-native";
export default function Home()
{
    return (
      <View style={{flexDirection: "column", justifyContent: "space-between", flexGrow: 1}}>
        <View style={{ height: '100%'}}>
          <View style={{flexDirection: "column", justifyContent: "space-between", flexGrow: 1}}>
            <Header/>
            <View style={{ height: '80%'}}>
              <DataMenu/>
            </View>
          </View>
        </View>
      </View>
      
    );
}
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
            source={require('./assets/account.jpeg')}
          />
        </View>
      </View>
  );
}
const DataMenu = () => {
    return (
      <ScrollView style={bodyStyle.mainScroll}>
        <View style={bodyStyle.jumbotron}>
          <View style={{margin:10}}>
            <Text style={bodyStyle.jumbotrontitle}>Total Antrian Hari Ini</Text>
            <Text style={bodyStyle.jumbotronsubtitle}>92</Text>
            <View style={tombol.tombol_antri}>
              <View style={{margin:10}}>
                <Text>Antri Sekarang</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={bodyStyle.judul}>Menu Utama</Text>
        <View style={bodyStyle.menuitem}>
          <View style={bodyStyle.item}>
            <View style={bodyStyle.itemicon}>
              <Text>I</Text>
            </View>
            <Text>Data Dokter</Text>
          </View>
          <View style={bodyStyle.item}>
            <View style={bodyStyle.itemicon}>
              <Text>I</Text>
            </View>
            <Text>Data Dokter</Text>
          </View>
          <View style={bodyStyle.item}>
            <View style={bodyStyle.itemicon}>
              <Text>I</Text>
            </View>
            <Text>Data Dokter</Text>
          </View>
        </View>
        <View>
          <Text style={bodyStyle.judul}>Berita</Text>
        </View>
      </ScrollView>
    );
  };

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
const bodyStyle = StyleSheet.create({
    mainScroll:{
      margin: 10
    },
    jumbotron: {
      flexDirection: "column",
      backgroundColor: "#3399ff",
      borderRadius: 20,
    }, 
    jumbotrontitle : {
      fontSize: 20, 
      color: "white",
      fontWeight: "bold",
      marginBottom: 5
    },
    jumbotronsubtitle: {
      fontSize: 20, 
      color: "white",
      marginBottom: 5
    },
    jumbotroncontent: {
      fontSize: 20,
      color: "white",
      marginBottom: 10
    },
    judul : {
      fontSize: 25,
      fontWeight: "bold",
      color: "black"
    }, 
    menuitem : {
      
      margin: 10
    },
    item :{
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center"
    },
    itemicon : {
      width: 80, 
      height: 80,
      borderRadius: 10,
      backgroundColor: "red"
    },
    menu : {
      flexDirection: "row",
    }
  });
  const tombol = StyleSheet.create({
    tombol_antri:{
      borderRadius: 20,
      backgroundColor: "white",
      width: 150,
      color: "#3399ff"
    }, 
  });