import React from "react";
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
export default function Home()
{
    return (
        <View>
          <DataMenu/>
        </View>
    );
}
const DataMenu = () => {
    return (
        <ScrollView style={bodyStyle.mainScroll}>
            <Jumbotron/>
            <MenuList/>
            <BottomJumbotron/>
        </ScrollView>
    );
};
const Jumbotron = () => {
    return (
      <View style={jumbotron_style.body}>
        <View>
          <Text style={jumbotron_style.title_style}>Jumlah Antrian</Text>
          <Text style={{color: "white", fontSize: 18}}>Total</Text>
          <Text style={jumbotron_style.title_style}>90</Text>
          <View style={jumbotron_style.tombol_mulai}>
            <Text style={{ color: "#1873ac", fontWeight: "bold"}}>Mulai Antrian</Text>
            <ArrowRight2
              size="20"
              color="#1873ac"
            />
          </View>
        </View>
        <View>
          <View style={jumbotron_style.icon_container}>
            <View style={jumbotron_style.icon_box}>
              <View style={jumbotron_style.icon}>
                <Notification
                    variant="Bold"
                    size="35"
                    color="#1873ac"
                  />
              </View>
              <Text style={jumbotron_style.text_style}>Cek Antrian</Text>
            </View>
            <View style={jumbotron_style.icon_box}>
              <View style={jumbotron_style.icon}>
                <ScanBarcode
                  variant="Bold"
                  size="35"
                  color="#1873ac"
                />
              </View>
              <Text style={jumbotron_style.text_style}>Scan</Text>
            </View>
          </View>
        </View>
      </View>
    );
}
const BottomJumbotron = () => {
    return (
      <View style={{ marginTop: 30}}>
        <ImageBackground
          style={{height: 150}}
          imageStyle={{borderRadius: 10}}
          source={require('../../assets/doctor-crossing-arms-while-holding-stethoscope-white-coat.jpg')}
        >
          <View style={{justifyContent: "flex-end", height: "100%", padding: 10}}>
            <Text style={{ fontWeight: "500", fontSize: 20, color:"black"}}>Gunakan Find Doctor Untuk Daftar Poli</Text>
            <Text>Find doctor aplikasi serba bisa!</Text>
          </View>
        </ImageBackground>
      </View>
    );
}
const MenuList = ()=>{
    return (
      <View style={menuStyle.body}>
      <View style={menuStyle.icon_container}>
        <View style={menuStyle.icon_box}>
          <View style={menuStyle.icon}>
            <UserSearch
                variant="Bold"
                size="35"
                color="white"
              />
          </View>
          <Text>Data Dokter</Text>
        </View>
        <View style={menuStyle.icon_box}>
          <View style={menuStyle.icon}>
            <Courthouse
                variant="Bold"
                size="35"
                color="white"
              />
          </View>
          <Text>Data Poli</Text>
        </View>
        <View style={menuStyle.icon_box}>
          <View style={menuStyle.icon}>
            <Profile2User
                variant="Bold"
                size="35"
                color="white"
              />
          </View>
          <Text>Cek Antrian</Text>
        </View>
        <View style={menuStyle.icon_box}>
          <View style={menuStyle.icon}>
            <UserAdd
                variant="Bold"
                size="35"
                color="white"
              />
          </View>
          <Text>Antrian</Text>
        </View>
      </View>
      <View style={menuStyle.icon_container}>
      <View style={menuStyle.icon_box}>
          <View style={menuStyle.icon}>
            <NoteFavorite
                variant="Bold"
                size="35"
                color="white"
              />
          </View>
          <Text>Cek Riwayat</Text>
        </View>
        <View style={menuStyle.icon_box}>
          <View style={menuStyle.icon}>
            <Receipt21
                variant="Bold"
                size="35"
                color="white"
              />
          </View>
          <Text>Layanan</Text>
        </View>
        <View style={menuStyle.icon_box}>
          <View style={menuStyle.icon}>
            <ChemicalGlass
                variant="Bold"
                size="35"
                color="white"
              />
          </View>
          <Text>Laboratorium</Text>
        </View>
        <View style={menuStyle.icon_box}>
          <View style={menuStyle.icon}>
            <Menu
                variant="Bold"
                size="35"
                color="white"
              />
          </View>
          <Text>Lainnya</Text>
        </View>
      </View>
    </View>
    );
}
const bodyStyle = StyleSheet.create({
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
title : {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
}, 
card_header : {
    justifyContent: "space-between", 
    flexDirection: "row"
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
  const jumbotron_style = StyleSheet.create({
    body: {
      backgroundColor: "#1872ae",
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 15,
      paddingBottom: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: 15
    }, 
    title_style : {
      color: "white",
      fontWeight: "bold",
      fontSize: 23
    },
    antrian_style: {
      color: "white",
      fontWeight: "bold",
      fontSize: 23
    },
    text_style : {
      color: "white",
      fontSize: 12
    },
    tombol_mulai : {
      flexDirection: "row",
      padding: 5,
      paddingLeft: 10,
      backgroundColor: "white",
      borderRadius: 15,
      color: "white",
      marginTop: 10,
      justifyContent: "space-between"
    },
    icon_container : {
      flexDirection: "row",
      alignItems: "center"
    },
    icon_box : {
      flexDirection: "column",
      alignItems: "center",
      marginTop: 15,
      marginRight: 12
    },
    icon : { 
      backgroundColor: "white", 
      padding: 15, 
      marginBottom: 5, 
      borderRadius: 15 
    }
  });
  const menuStyle = StyleSheet.create({
    body : {
      flexDirection: "column",
      marginTop: 12
    },
    icon_container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    icon_box : {
      flexDirection: "column",
      alignItems: "center",
      marginTop: 15,
      marginRight: 21,
    },
    icon : { 
      backgroundColor: "#1873ac", 
      padding: 15, 
      marginBottom: 5, 
      borderRadius: 15 
    }
  });
  const itemHorizontal = StyleSheet.create({
    cardItem: {
      width: 280,
    },
    cardImage: {
      width: '100%',
      height: 200,
      borderRadius: 5,
    },
    cardContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
    },
    cardInfo: {
      justifyContent: 'flex-end',
      height: '100%',
      gap: 10,
      maxWidth: '60%',
    },
    cardTitle: {
      fontSize: 14,
      color: "#FFFFFF",
    },
    cardText: {
      fontSize: 10,
      color: "#FFFFFF",
    },
    cardIcon: {
      backgroundColor: "#FFFFFF",
      padding: 5,
      color: "#FFFFFF",
      borderWidth: 0.5,
      borderRadius: 5,
    },
  });