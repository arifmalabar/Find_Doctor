import React, { useEffect, useRef, useState } from "react";
import {View, Text, FlatList, ScrollView, Image, TouchableOpacity, StyleSheet} from "react-native";
import { ArrowLeft, Add } from "iconsax-react-native";
import color from "../config/colors";
import AppBar from "../components/AppBar";
import { useNavigation } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import ActionSheet from "react-native-actions-sheet";
export default function Dokter() {
    const nav = useNavigation();
    const [dokterData, setDokterData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(true);
    const actionSheetRef = useRef(null);
    const openActionSheet = () => {
        actionSheetRef.current?.show();
      };
    
      const closeActionSheet = () => {
        actionSheetRef.current?.hide();
      };
    useEffect(() => {
        const subscriber = firestore()
          .collection('dokter')
          .onSnapshot(querySnapshot => {
            const data = [];
            querySnapshot.forEach(documentSnapshot => {
              data.push({
                ...documentSnapshot.data(),
                id: documentSnapshot.id,
              });
            });
            setDokterData(data);
            setLoading(false);
          });
        return () => subscriber();
      }, []);
    return (
        <View style={{height: '100%', marginTop: 10, marginLeft: 10, marginRight: 10}}>
            <AppBar title="Data Dokter"/>
            {
                loading ? (
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text>Loading harap tunggu</Text>
                    </View>
                ) : (
                    <View>
                        <ScrollView 
                        style={{marginLeft: 10, marginRight: 10, marginTop: 20}}
                        vertical>
                            {
                                dokterData.map((item, index) => {
                                    return (
                                        <TouchableOpacity 
                                            onPress={() => nav.navigate('DetailDokter', {dokterId : item.id})}
                                            style={data_dokterstyle.item_data}>
                                            <Image 
                                                source={{uri : item.image}}
                                                style={{borderRadius: 10, height: 100, width: 150}}
                                            />
                                            <View style={data_dokterstyle.data}>
                                                <Text style={data_dokterstyle.data_title}>{item.nama}</Text>
                                                <Text>Poli Jantung</Text>
                                            </View>
                                            <ActionSheet
                                                ref={actionSheetRef}
                                                containerStyle={{
                                                    borderTopLeftRadius: 15, 
                                                    borderTopRightRadius: 20
                                                }}
                                                gestureEnabled={true}
                                            >
                                                <TouchableOpacity
                                                    onPress={() => nav.navigate("UpdateDokter", item)}
                                                    style={{justifyContent: "center", alignItems: "center", padding: 12}}
                                                >
                                                    <Text>Ubah</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={{justifyContent: "center", alignItems: "center", padding: 12}}
                                                >
                                                    <Text>Hapus</Text>
                                                </TouchableOpacity>
                                            </ActionSheet>
                                        </TouchableOpacity>
                                    );
                                })
                            }
                        </ScrollView>
                        
                    </View>
                )
            }
            <TouchableOpacity 
                style={data_dokterstyle.floating}
                onPress={() => nav.navigate('TambahDokter')}
                >
                    <Add 
                        variant="linear"
                        size={25}
                        color="white" />
            </TouchableOpacity>
        </View>
    );
}
const DokterData = (props) => {
    return (
        <TouchableOpacity style={data_dokterstyle.item_data}>
            <Image 
                source={{uri : props.image}}
                style={{borderRadius: 10, height: 100, width: 150}}
            />
            <View style={data_dokterstyle.data}>
                <Text style={data_dokterstyle.data_title}>{props.nama}</Text>
                <Text>Poli Jantung</Text>
            </View>
        </TouchableOpacity>
    );
}
const data_dokterstyle = StyleSheet.create({
    item_data : {
        flexDirection: "row",
        marginTop: 12
    },
    data : {
        flexDirection: "column",
        marginLeft: 10
    },
    data_title : {
        color: color.primary_color, 
        fontSize: 18, 
        fontWeight: "bold"
    },
    floating : {
        padding: 12,
        backgroundColor: color.primary_color,
        borderRadius: 10,
        position: "absolute",
        bottom: 25, 
        right: 10
    }
});