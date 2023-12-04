import React, {useState, useEffect} from "react"
import {View, Text, StyleSheet, TextInput, SafeAreaView, Button} from "react-native"
import InputBox from "../components/InputBox"
import SelectDropdown from 'react-native-select-dropdown'
import DataPoli from "../data/data"
import {ArrowLeft} from "iconsax-react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
import { data_poli, data_dokter } from "../data/data"
import axios from "axios"
export default function UpdatePesanDokter({route}) {
    const {idPesan} = route.params;
    const nav = useNavigation();
    const [detailPesan, setDetailPesan] = useState([]);
    const [pesan, setPesan] = useState({
        NIK : "",
        nama : "",
        alamat: "",
        dokter: "",
        notelp: "",
        alamat: "",
        poli : ""
    });
    
    const [loading, setLoading] = useState(true);
    const inputHandler = (key, value) => {
        setPesan({
            ...pesan, 
                [key] : value
        });
    }
    const getDataById = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://656d2369bcc5618d3c22dc61.mockapi.io/finddoctor/pesan_antrian/${idPesan}`);
            setDetailPesan(response.data);
            console.log(detailPesan);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    const updateData = async () => {
        setLoading(true);
        try {
            await axios.put(`https://656d2369bcc5618d3c22dc61.mockapi.io/finddoctor/pesan_antrian/${idPesan}`, {
                NIK : pesan.NIK,
                nama : pesan.nama,
                alamat : pesan.alamat,
                dokter: pesan.dokter,
                notelp: pesan.notelp,
                poli : pesan.poli,
                jadwal: "07.00"
            }).then(function (params) {
                console.log(params)
            }).catch(function (err) {
                console.log(err)
            });
            setLoading(false);
            nav.navigate('Antrian');
        } catch (error) {
            console.log(error);
        }
        console.log(pesan);
    }
    useEffect(() =>{
        getDataById();
    }, []);
    return (
        <View>
            <SafeAreaView style={input_style.header}>
                <TouchableOpacity
                    onPress={() => {
                        nav.goBack()
                    }}
                >
                    <ArrowLeft
                        color="black"
                        size={30}
                    />
                </TouchableOpacity>
                <Text style={input_style.header_title}>Update Antrian</Text>
            </SafeAreaView>
            <View style={input_style.main_body}>
                <View style={input_style.input_group}>
                    <Text style={input_style.label}>NIK/No KTP/KK</Text>
                    <TextInput
                        style={input_style.input_text}
                        inputMode=""
                        value={detailPesan.NIK}
                        placeholder="Masukan NIK"
                        onChangeText={(text) => inputHandler("NIK", text)}
                    />
                </View>
                <View style={input_style.input_group}> 
                    <Text style={input_style.label}>Nama Lengkap</Text>
                    <TextInput
                        style={input_style.input_text}
                        placeholder="Masukan Nama"
                        value={detailPesan.nama}
                        onChangeText={(text) => inputHandler("nama", text)}
                    />
                </View>
                <View style={input_style.input_groups}>
                    <View style={{width: '50%'}}>
                        <Text style={input_style.label}>Poli</Text>
                        <View style={input_style.input_options}>
                            <SelectDropdown
                                data={data_poli}
                                onSelect={(selectedItem, index) => {
                                    inputHandler("poli", selectedItem);
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                }}
                            />
                        </View>
                    </View>
                    <View style={{width: '50%'}}>
                        <Text style={input_style.label}>Dokter</Text>
                        <View style={input_style.input_options}>
                            <SelectDropdown
                                data={data_dokter}
                                onSelect={(selectedItem, index) => {
                                    inputHandler("dokter", selectedItem);
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={input_style.input_group}> 
                    <Text style={input_style.label}>Masukan Notelp</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={input_style.input_text}
                        placeholder="Masukan Notelp"
                        value={detailPesan.notelp}
                        onChangeText={(text) => inputHandler("notelp", text)}
                    />
                </View>
                <View style={input_style.input_group}> 
                    <Text style={input_style.label}>Alamat</Text>
                    <TextInput
                        placeholder="Masukan Alamat" 
                        style={input_style.input_textarea}
                        value={detailPesan.alamat}
                        multiline
                        onChange={(text) => inputHandler("alamat", "asassasa")}
                    />
                </View>
            </View>
            <View style={input_style.footer}>
                <Button 
                    title="BUAT ANTRIAN BARU"
                    color="#1873ac"
                    onPress={updateData}
                 ></Button>
            </View>
        </View>
    );
}
const input_style = StyleSheet.create({
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
    input_text : {
        padding: 12,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10
    },
    input_options : {
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10
    },
    input_textarea : {
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        height: 100
    },
    input_group : {
        marginBottom: 10,
        marginTop: 5,
    },
    main_body: {
        padding: 12,
        flexDirection:"column",
        height: '86%'
    },
    footer : {
        marginLeft: 12, 
        marginRight: 12,
    },
    label : {
        fontSize: 12
    },
    input_groups : {
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 5,
    }
})
