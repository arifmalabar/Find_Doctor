import react, { useEffect, useState } from "react";
import {View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Message, Call, PenAdd, Heart, Edit, Back, ArrowLeft, Trash } from "iconsax-react-native";
import color from "../config/colors";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export default function DetailDokter({route})
{
    const {dokterId} = route.params;
    const [detailData, setDetailData] = useState({});
    const nav = useNavigation();
    useEffect(() => {
        console.log(route)
        const subscriber = firestore()
            .collection('dokter')
            .doc(dokterId)
            .onSnapshot(docSnapshot => {
                const data = docSnapshot.data();
                if(data){
                    setDetailData(data);
                } else {
                    console.log('not found');
                }
            })
        //setDetailData(route.params);
        return () => subscriber();
    }, [dokterId]);
    const handleDelete = async () => {
        try {
            await firestore()
                .collection('dokter')
                .doc(dokterId)
                .delete()
                .then(() => {
                    console.log('Data Terhapus');
                });
            if(detailData?.image)
            {
                const imageRef = storage().refFromURL(detailData.image);
                await imageRef.delete();
            }
            setDetailData(null);
            nav.goBack();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={{height: '100%'}}>
            <View>
                <ImageBackground 
                    imageStyle={{height: 350, borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
                    resizeMode="cover"
                    source={{uri: detailData.image}}>
                    <View style={detail_style.jumbotron_button_group}>
                        <View style={detail_style.jumbotron_button}>
                            <Message 
                                variant="bold"
                                size={25}
                                color="white"/>
                        </View>
                        <View style={detail_style.jumbotron_button}>
                            <Call 
                                variant="bold"
                                size={25}
                                color="white" />
                        </View>
                        <View style={detail_style.jumbotron_button}>
                            <Message 
                                variant="bold"
                                size={25}
                                color="white" />
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={detail_style.main_data}>
                <View style={detail_style.main_header}>
                    <Text style={{fontWeight: "bold", fontSize: 25}}>{detailData.nama}</Text>
                    <View style={{flexDirection: "row", alignContent: "center"}}>
                        <Heart 
                            size={20}
                            variant="bold"
                            color={color.primary_color}/>
                        <Text> Spesialis Jantung | NIP {detailData.NIP}</Text>
                    </View>
                </View>
                <View>
                    <View style={detail_style.detail}>
                        <View style={{flexDirection: "column", alignItems: "center"}}>
                            <Text style={{marginBottom: 20, fontSize: 18}}>Pengalaman</Text>
                            <Text style={{fontWeight: "bold", color: "black"}}>{detailData.pengalaman}</Text>
                        </View>
                        <View style={{flexDirection: "column", alignItems: "center"}}>
                            <Text style={{marginBottom: 20, fontSize: 18}}>Pasien</Text>
                            <Text style={{fontWeight: "bold", color: "black"}}>{detailData.jumlah_pasien}</Text>
                        </View>
                        <View style={{flexDirection: "column", alignItems: "center"}}>
                            <Text style={{marginBottom: 20, fontSize: 18}}>Nilai</Text>
                            <Text style={{fontWeight: "bold", color: "black"}}>{detailData.rating}</Text>
                        </View>
                    </View>
                    <View style={detail_style.about}>
                        <Text style={{fontSize: 20, color: "black"}}>About</Text>
                        <Text>{detailData.deskripsi}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity 
                onPress={() => nav.navigate('UpdateDokter', {dokterId : dokterId})}
                style={detail_style.floating}>
                <Edit color="white" variant="bold" size={25}/>
            </TouchableOpacity>
            <TouchableOpacity style={detail_style.back}>
                <ArrowLeft color="black" variant="bold" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={handleDelete}
                style={detail_style.delete}>
                <Trash color="black" variant="bold" size={30}/>
            </TouchableOpacity>
        </View>
    );  
}
const detail_style = StyleSheet.create({
    jumbotron : {
        flexDirection: "column",
    },
    jumbotron_button_group : {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: '100%',
        flexDirection: "row",
        position : "absolute",
        top: 270, 
    },
    jumbotron_button : {
        justifyContent: "space-evenly",
        backgroundColor: color.primary_color,
        padding: 12,
        borderRadius: 40,
        marginLeft: 20,
        marginRight: 20
    },
    main_data : {
        flexDirection: "column",
        paddingLeft: 15, 
        paddingRight: 15,
        position: "absolute",
        bottom: 250,
        width: '100%'
    },
    main_header : {
        fontWeight: "bold", 
    },
    detail : {
        marginTop: 10,
        marginRight: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    }, 
    about : {
        flexDirection: "column",
        marginTop: 20,
    },
    floating : {
        backgroundColor: color.primary_color,
        padding: 10,
        borderRadius: 15,
        position: "absolute",
        padding: 12,
        right: 18,
        bottom: 25
    },
    back : {
        position: "absolute",
        padding: 12,
        left: 14,
        top: 10
    },
    delete : {
        position: "absolute",
        padding: 12,
        right: 14,
        top: 10
    }
});