import React from "react";
import {User, Receipt21} from "react-native-svg";
import {View, Text, ScrollView, StyleSheet, Button, FlatList} from "react-native";
export default function App()
{
  return (
    <View>
      <Header/>
      <MainBody/>
    </View>
  )
}
const Header = () => {
  return (
      <View style={headerstyle.app_bar}>
          <View style={headerstyle.user_option}>
              <Text style={{fontWeight: "bold", fontSize: 18, color: "black"}}>Hello, Ridho Arif</Text>
              <Text>NoRm 082323444</Text>
          </View>
          <View>
            <Text>Foto User</Text>
          </View>
      </View>
  );
}
const MainBody = () => {
  return (
    <View style={bodyStyle.main_body}>
      <DataMenu/>
    </View>
  );
}
const DataMenu = () => {
  return (
    <ScrollView style={bodyStyle.mainScroll}>
      <View style={bodyStyle.jumbotron}>
        <View style={{margin:10, padding: 10}}>
          <Text style={bodyStyle.jumbotrontitle}>Total Antrian Hari Ini</Text>
          <Text style={bodyStyle.jumbotronsubtitle}>92</Text>
          <View style={tombol.tombol_antri}>
            <View style={{margin:10}}>
              <Text>Antri Sekarang</Text>
            </View>
          </View>
        </View>
      </View>
      <MenuList/>
      <View>
        <Text style={bodyStyle.judul}>Berita</Text>
      </View>
    </ScrollView>
  );
};
const MenuList = ()=>{
  const items = [
    {title: "Dokter", icon: "user", color: "#C3C6CA"},
    {title: "Dokter", icon: "user", color: "#C3C6CA"},
    {title: "Dokter", icon: "user", color: "#C3C6CA"},
    {title: "Dokter", icon: "user", color: "#C3C6CA"},
  ]
  return (
    <View style={bodyStyle.listmenuitem}>
      <FlatList
      data={items}
      numColumns={2}
      renderItem={({ item }) => 
        <View style={bodyStyle.menuitem}>
          <View style={bodyStyle.item}>
            <View style={bodyStyle.itemicon}>
              <Text>{item.title}</Text>
            </View>
            <Text>Dokter</Text>
          </View>
        </View>
        }
        keyExtractor={(item) => item.id}
      />
      <FlatList
        data={items}
        numColumns={2}
        renderItem={({ item }) => 
        <View style={bodyStyle.menuitem}>
          <View style={bodyStyle.item}>
            <View style={bodyStyle.itemicon}>
              <Text>{item.title}</Text>
            </View>
            <Text>Dokter</Text>
          </View>
        </View>
        }
        keyExtractor={(item) => item.id}
      />
    </View>
    
  );
}
const MenuItem = () => {
  return (
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
  );
}
const bodyStyle = StyleSheet.create({
  main_body : {
    backgroundColor: "#ECECEC",
  },
  listmenuitem : {
    flexDirection: "row",
    justifyContent: "space-between"
  },
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
    fontWeight: "500",
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
    marginLeft: 10,
    marginRight: 10, 
    marginTop: 20,
    flexDirection: "row", 
  },
  item :{
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10
  },
  itemicon : {
    width: 60, 
    height: 60,
    borderRadius: 30,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
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
      padding: 10,
      flexDirection: "row", 
  },
  user_option : {
      flexDirection: "column",
  },
  foto_user : {
    borderRadius: 20,
    width: 20,
    height: 20,
  }
})