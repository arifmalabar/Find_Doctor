import React, { useState, useEffect, useRef, useCallback } from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import {Location, ActivityIndicator} from "iconsax-react-native";
import { Data_Antrian } from "../data/data";
import Header from "../components/Header";
import { getData } from "../config/fetch_data";
import axios from "axios";
import { antrian as urlAntrian } from "../config/end_points";
import ActionSheet from "react-native-actions-sheet";
import { RefreshControl, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
export default function Antrian() 
{
    const nav = useNavigation();
    const actionSheetRef = useRef(null);
    const openActionSheet = () => {
        actionSheetRef.current?.show();
    }
    const closeActionSheet = () => {
        actionSheetRef.current?.hide();
    }
    const [loading, setLoading] = useState(true);
    const [antrian, setAntrian] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const showAntrian = async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://656d2369bcc5618d3c22dc61.mockapi.io/finddoctor/pesan_antrian");
            setAntrian(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error); 
        }
    }
    const deleteAntrian = async (id) => {
        try {
            setLoading(true);
            await axios
                .delete(`https://656d2369bcc5618d3c22dc61.mockapi.io/finddoctor/pesan_antrian/${id}`)
                .then(function (params) {
                    console.log(params);
                })
                .catch(function (error) {
                    console.log(error);
                });
            setLoading(false);
            closeActionSheet();
            showAntrian();
            
        } catch (error) {
            
        }
    }
    useEffect(() => {
        showAntrian();
    }, []);
    const onRefresh = useCallback(() => {
        setRefresh(true);
        setTimeout(() => {
            showAntrian();
            setRefresh(false);
        }, 1500);
      }, []);
    return (
        <View>
            <Header/>
            {loading ? (
                <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <Text>Tunggu Sebentar</Text>
                </View>
            ) : (
                <FlatList
                    data={antrian}
                    refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh}/> }
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View>
                            <TouchableOpacity 
                                style={card_view.card_body}
                                onPress={openActionSheet}
                                >
                                <View style={{justifyContent: "center"}}>
                                    <View style={card_view.card_watch}>
                                        <Text style={card_view.body_watch_text}>{item.jadwal}</Text>
                                    </View>
                                </View>
                                <View style={card_view.body_caption}>
                                    <Text style={{fontSize: 18, marginBottom: 5}}>Antrian Ke : {item.id}</Text>
                                    <Text style={{fontSize: 18, marginBottom: 5,color: "#3f82ac", fontWeight: "bold"}}>{item.dokter}</Text>
                                    <View style={{ flexDirection: "row",marginBottom: 5}}>
                                        <Location
                                            size="20"
                                            color="black"
                                            variant="bold"
                                            style={{justifyContent: "center"}}
                                        />
                                        <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.poli}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <ActionSheet 
                                ref={actionSheetRef}
                                containerStyle={{
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                }} 
                            >
                                <TouchableOpacity
                                    onPress={() => nav.navigate('UpdatePesanDokter', {idPesan : item.id})}
                                    style={card_view.open_sheet_box}>
                                    <Text>
                                        Update
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={deleteAntrian(item.id)}
                                    style={card_view.open_sheet_box}>
                                    <Text
                                        style={{color: "red"}}>
                                        Hapus
                                    </Text>
                                </TouchableOpacity>
                            </ActionSheet>
                        </View>
                    )
                }></FlatList>
            )}
            
        </View>
    );
}

const card_view = StyleSheet.create({
    card_body : {
        borderRadius: 15,
        borderColor: "grey",
        borderWidth: 1,
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10
    },
    card_watch : {
        borderRadius: 100,
        borderColor : "#3f82ac",
        borderWidth: 5,
        height: 80,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    body_watch_text : {
        fontSize : 20,
        color: "#3f82ac",
        fontWeight: "bold"
    },
    body_caption : {
        marginLeft: 20,
        padding: 5
    },
    loading_overlay : {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignContent: "center",
        justifyContent: "center"
    },
    open_sheet_box : {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15
    }
});