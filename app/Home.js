import React from "react";
import style from "./style/style";
import {View, Text, ScrollView, StyleSheet, Button, AppBar} from "react-native";
export default function Home()
{
    return (
        <View>
            <header/>
        </View>
    )
}
const header = () => {
    return (
        <View style={headerstyle.app_bar}>
            <View style={headerstyle.user_option}>
                <Text>Hello, Ridho Arif Wicaksono</Text>
                <Text>NoRm 082323444 - Pasien</Text>
            </View>
            <View>
                <Text>Foto</Text>
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
  const headerstyle = StyleSheet.create({
    app_bar : {
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10
    },
    user_option : {
        flexDirection: "column",
    }
  })