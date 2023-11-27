import React from "react"
import {View, Text, StyleSheet, TextInput, SafeAreaView, Button} from "react-native"
import InputBox from "../components/InputBox"
import SelectDropdown from 'react-native-select-dropdown'
import DataPoli from "../data/data"
import {ArrowLeft} from "iconsax-react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
export default function PesanDokter() {
    const nav = useNavigation();
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
                <Text style={input_style.header_title}>Tambah Antrian</Text>
            </SafeAreaView>
            <View style={input_style.main_body}>
                <View style={input_style.input_group}>
                    <Text style={input_style.label}>NIK/No KTP/KK</Text>
                    <TextInput
                        style={input_style.input_text}
                        inputMode=""
                        placeholder="Masukan NIK"
                    />
                </View>
                <View style={input_style.input_group}> 
                    <Text style={input_style.label}>Nama Lengkap</Text>
                    <TextInput
                        style={input_style.input_text}
                        placeholder="Masukan Nama"
                    />
                </View>
                <View style={input_style.input_groups}>
                    <View style={{width: '50%'}}>
                        <Text style={input_style.label}>Poli</Text>
                        <View style={input_style.input_options}>
                            <SelectDropdown
                                data={DataPoli}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
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
                                data={DataPoli}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
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
                    />
                </View>
                <View style={input_style.input_group}> 
                    <Text style={input_style.label}>Alamat</Text>
                    <TextInput
                        placeholder="Masukan Alamat" 
                        style={input_style.input_textarea}
                        multiline
                    />
                </View>
            </View>
            <View style={input_style.footer}>
                <Button 
                    title="BUAT ANTRIAN BARU"
                    color="#1873ac"
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
