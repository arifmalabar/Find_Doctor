import React from "react"
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput} from "react-native"
import {
    Back,
    ArrowLeft,
    SearchNormal1
} from "iconsax-react-native"
import { useNavigation } from "@react-navigation/native";

export default function SearchArtikel(params) {
    const nav = useNavigation();
    return (
        <View>
            <SafeAreaView style={search_style.header}>
                <TouchableOpacity
                    onPress={() => {
                        nav.goBack()
                    }}
                >
                    <ArrowLeft
                        color="black"
                        size={30}
                        style={{marginTop: 20, marginRight: 10}}
                    />
                </TouchableOpacity>
                <View 
                    style={search_style.search_box}
                    onPress={() => {
                        nav.navigate('SearchArtikel')
                    }}
                >
                    <TextInput placeholder="Cari Artikel" style={{marginLeft: 10}}></TextInput>
                </View>
            </SafeAreaView>
        </View>
    );
}
const search_style = StyleSheet.create({
    header : {
        flexDirection: "row",
        padding: 8
    },
    header_title : {
        fontWeight: "bold",
        fontSize: 18,
        width: '80%',
        marginTop: 2,
        marginLeft: 10
    },
    search_box: {
        flexDirection: "row",
        borderRadius: 15,
        borderColor: "grey",
        borderWidth: 1,
        padding: 1,
        paddingLeft: 10,
        marginTop: 10, 
        alignItems: "center",
        width: '90%'
    }
})