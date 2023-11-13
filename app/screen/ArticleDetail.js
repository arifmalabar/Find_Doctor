import React from "react"
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ArtikelHangat } from "../data/data"
import { ArrowLeft } from "iconsax-react-native"
import { ScrollView } from "react-native-gesture-handler"
export default function ArticleDetail({route})
{
    const nav = useNavigation();
    const {id} = route.params;
    const selectedList = ArtikelHangat.data.find(itemData => itemData.id === id);
    return (
        <View>
            <View style={articleStyle.header}>
                <TouchableOpacity onPress={() => nav.goBack()} >
                    <ArrowLeft
                        color="grey"
                        variant="lienar"
                        size={26} />
                </TouchableOpacity>
            </View>
            <View style={articleStyle.content}>
                <Text style={articleStyle.title}>{selectedList.title}</Text>
                <Text>Ditulis Oleh {selectedList.creator}</Text>
                <ImageBackground source={{uri: selectedList.image}} style={{height: 150, marginTop: 15, marginBottom: 15}} imageStyle={{borderRadius: 10}} resizeMode="cover"/>
                <ScrollView vertical>
                    <Text style={articleStyle.contentText}>{selectedList.content}</Text>
                </ScrollView>
            </View>
        </View>
    );
}
const articleStyle = StyleSheet.create({
    header: {
        paddingLeft: 10, 
        paddingTop: 10, 
        paddingBottom:10
    }, 
    title : {
        fontWeight: "400",
        fontSize: 20,
        textAlign: "justify",
        color: "black"
    },
    contentText : {
        fontSize: 14,
        textAlign: "justify",
    },
    content : {
        padding: 10
    }
})