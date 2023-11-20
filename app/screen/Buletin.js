import React, {useRef} from "react";
import {
    View, 
    Text, 
    ScrollView, 
    TextInput, 
    StyleSheet, 
    FlatList, 
    ImageBackground, 
    Touchable, 
    TouchableOpacity, 
    Image,
    Animated } from "react-native";
import { SearchNormal1, Trade } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { ArtikelHangat, TopikHangat, ArtikelTerbaru, ArtikelTerbaruCategory } from "../data/data";


export default function Buletin()
{
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 160);
    const headerY = diffClampY.interpolate({
        inputRange: [0, 40],
        outputRange: [0, -40],
    });
    const recentY = diffClampY.interpolate({
        inputRange: [0, 160],
        outputRange: [0, -160],
        extrapolate: 'clamp',
    })
    return (
        <View>
            <Animated.View style={[headerStye.container, {transform:[{translateY:headerY}]}]}>
                <Text style={bodyStyle.container_title}>Jelajah Buletin Kesehatan</Text>
                <Text style={{marginTop: 10, marginBottom: 10}}>Kumpulan tips kesehatan informasi penyakit dan kesehatan yang sangat lengkap</Text>
                <View style={bodyStyle.search_box}>
                    <SearchNormal1 variant="Linear" color="black" ></SearchNormal1>
                    <TextInput placeholder="Cari Artikel" style={{marginLeft: 10}}></TextInput>
                </View>
            </Animated.View>
            <Animated.ScrollView
                 showsVerticalScrollIndicator={false}
                 onScroll={Animated.event(
                   [{nativeEvent: {contentOffset: {y: scrollY}}}],
                   {useNativeDriver: true},
                 )}
                 contentContainerStyle={{paddingTop: 160}}>
                <View>
                    <Artikel/>
                    <Topik/>
                    <NewArtikel />
                </View>
            </Animated.ScrollView>
        </View>
    );
}
const Header = (props) => {
    
    const diffClampY = Animated.diffClamp(props.scrolly, 0, 160);
    const recentY = diffClampY.interpolate({
        inputRange: [0, 160],
        outputRange: [0, -160],
    })
    return (
        <Animated.View style={[headerStye.container, {transform:[{translateY:props.scrolly}]}]}>
            <Text style={bodyStyle.container_title}>Jelajah Buletin Kesehatan</Text>
            <Text style={{marginTop: 10, marginBottom: 10}}>Kumpulan tips kesehatan informasi penyakit dan kesehatan yang sangat lengkap</Text>
            <View style={bodyStyle.search_box}>
                <SearchNormal1 variant="Linear" color="black" ></SearchNormal1>
                <TextInput placeholder="Cari Artikel" style={{marginLeft: 10}}></TextInput>
            </View>
        </Animated.View>
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
const headerStye = StyleSheet.create({
    container: {
        position: 'absolute',
        elevation: 1000,
        zIndex: 999,
        backgroundColor: "white"
    },
    header: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        height: 160,
        paddingTop: 8,
        paddingBottom: 4,
        position: 'absolute',
        top: 0,
        zIndex: 1000,
        right: 0,
        left: 0,
    },
});
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