import React from "react";
import {View, Text, ScrollView, TextInput, StyleSheet, FlatList, ImageBackground, Touchable, TouchableOpacity, Image} from "react-native";
import { SearchNormal1 } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { ArtikelHangat, TopikHangat, ArtikelTerbaru, ArtikelTerbaruCategory } from "../data/data";

export default function Buletin()
{
    return (
        <ScrollView vertical>
            <View style={{margin: 10}}>
                <Header/>
                <Artikel/>
                <Topik/>
                <NewArtikel />
            </View>
        </ScrollView>
    );
}
const Header = () => {
    return (
        <View>
            <Text style={bodyStyle.container_title}>Jelajah Buletin Kesehatan</Text>
            <Text style={{marginTop: 10}}>Kumpulan tips kesehatan informasi penyakit dan kesehatan yang sangat lengkap</Text>
            <View style={bodyStyle.search_box}>
                <SearchNormal1 variant="Linear" color="black" ></SearchNormal1>
                <TextInput placeholder="Cari Artikel" style={{marginLeft: 10}}></TextInput>
            </View>
        </View>
    );
};
const Artikel = () => {
    
    return (
        <View>
            <View>
                <Text style={bodyStyle.container_title}>Artikel Hangat</Text>
            </View>
            <View>
                <FlatList 
                horizontal
                data={ArtikelHangat.data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => 
                    <ImageBackground
                        source={{uri:item.image}}
                        resizeMode="cover"
                        imageStyle={{borderRadius: 15}}
                        style={ArtikelStyle.image_cover}
                        >
                        <View>
                            <View style={{ height: "80%"}}></View>
                            <Text style={{fontWeight: "500", color:"white", fontSize: 15}}>{item.title}</Text>
                        </View>
                    </ImageBackground>
                }/>
            </View>
        </View>
    );
};
const Topik = () => {
    return (
        <View>
            <View>
                <Text style={bodyStyle.container_title}>Topik Hangat</Text>
            </View>
            <View>
            <FlatList 
                horizontal
                data={TopikHangat}
                keyExtractor={(item) => TopikHangat}
                renderItem={({item}) => 
                    <View style={TopikHangatStyle.topik_box}>
                        <Text style={TopikHangatStyle.title}>{item}</Text>
                    </View>
                } />
            </View>
        </View>
    );
}
const NewArtikel = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View>
                <Text style={bodyStyle.container_title}>Artikel Terbaru</Text>
            </View>
            <View style={{flexDirection: "column"}}>
                <View>
                    <FlatList
                    horizontal
                    data={ArtikelTerbaruCategory}
                    keyExtractor={(item) => ArtikelTerbaru}
                    renderItem={({item}) => 
                        <TouchableOpacity 
                        style={NewArtikelStyle.kategori}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    } />
                </View>
                <View>
                    <FlatList 
                    vertical
                    data={ArtikelHangat.data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => 
                        <TouchableOpacity 
                            style={{flexDirection: "row", marginTop: 10}}
                            onPress={() => navigation.navigate('ArticleDetail', {id: item.id})}>
                            <View>
                                <Image source={{uri: item.image}} borderRadius={15} style={{height:80, width: 120}}></Image>
                            </View>
                            <View style={{marginLeft: 15}}>
                                <Text style={{ color: "#3f82ac", fontWeight: "400"}}>{item.genre}</Text>
                                <Text style={{ color: "black", fontWeight: "400"}}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    }/>
                </View>
            </View>
        </View>
    );
};
const bodyStyle = StyleSheet.create({
    container_title : {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        marginTop: 10
    }, 
    search_box: {
        flexDirection: "row",
        borderRadius: 15,
        borderColor: "grey",
        borderWidth: 1,
        padding: 1,
        paddingLeft: 10,
        marginTop: 10, 
        alignItems: "center"
    }
});
const ArtikelStyle = StyleSheet.create({
    image_cover : {
        height: 150,
        width: 250,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 10
    },
});
const TopikHangatStyle = StyleSheet.create({
    topik_box : {
        backgroundColor: "#3f82ac",
        borderRadius: 15,
        height: 100,
        width: 120,
        marginLeft: 10,
        marginRight: 10, 
        marginTop: 10
    },
    title : {
        fontSize: 18,
        fontWeight: "bold",
        color : "white",
        marginTop: 15,
        marginLeft: 10
    }
});
const NewArtikelStyle = StyleSheet.create({
    kategori : {
        padding: 10,
        borderRadius: 20,
        borderColor: "grey",
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 8,
        marginTop: 10
    },
});