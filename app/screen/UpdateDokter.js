import React, { useState, useEffect } from "react";
import {View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Image, ActivityIndicator} from "react-native";
import AppBar from "../components/AppBar";
import { AddCircle, Trash} from "iconsax-react-native";
import color from "../config/colors";
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";
import { data_dokter } from "../data/data";
const UpdateDokter= ({route}) => {
    const {dokterId} = route.params;
    const nav = useNavigation();
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});
    const [oldImage, setOldImage] = useState(null);
    useEffect(() => {
        console.log(route.params);
        const subscriber = firestore()
          .collection('dokter')
          .doc(dokterId)
          .onSnapshot(querySnapshot => {
            const data = querySnapshot.data();
            if(data) {
                setDokterData({
                    nama : data.nama, 
                    NIP: data.nama,
                    pengalaman: data.pengalaman,
                    jumlah_pasien: data.jumlah_pasien,
                    rating: data.rating,
                    deskripsi: data.deskripsi,
                    image : data.image
                })
                setOldImage(dokterData.image);
                setImage(dokterData.image);
            } else {
                console.log("Tidak ada data");
            }
            setLoading(false);
          });
          return () => subscriber();
         }, [dokterId]);
    const imagePick = async () => {
        ImagePicker.openPicker({
            mediaType: "photo",
            width: 1700,
            height: 1080,
            cropping: true,
        }).then(image => {
            setImage(image.path);
            console.log(image);
        }).catch(err => {
            console.log(err);
        })
    }
    const [dokterData, setDokterData] = useState({
        NIP : 0,
        nama: "",
        pengalaman : 0,
        jumlah_pasien : 0,
        rating : 0,
        deskripsi : "", 
    });
    const onChangeHandle = (key, value) => {
        setDokterData({
            ...dokterData,
            [key] : value
        })
    }
    const updateDokter = async () => {
        setLoading(true);
        let filename = image.substring(image.lastIndexOf('/') + 1);
        const extension = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
        const reference = storage().ref(`blogimages/${filename}`);
        try {
            if (image !== oldImage && oldImage) {
                const oldImageRef = storage().refFromURL(oldImage);
                await oldImageRef.delete();
            }
            if (image !== oldImage) {
                await reference.putFile(image);
            }
            const url = image !== oldImage ? await reference.getDownloadURL() : oldImage;
            await firestore().collection('dokter').doc(dokterData.id).update({
                NIP: dokterData.NIP,
                nama : dokterData.nama,
                pengalaman : dokterData.pengalaman,
                jumlah_pasien: dokterData.jumlah_pasien,
                rating: dokterData.rating,
                deskripsi : dokterData.deskripsi,
                image: url
            });
            setImage(image);
            setLoading(false);
            console.log("Berhasil");
            nav.goBack();
        } catch (err){
            console.log(err);
        }
    }
    return (
        <View style={{height: '100%', marginTop: 10, marginLeft: 10, marginRight: 10}}>
            <AppBar title="Ubah Data"/>
            <ScrollView vertical style={{marginTop: 10}}>
                <View>
                    <Text>NIP</Text>
                    <TextInput 
                        style={tambah_style.form_box} 
                        keyboardType="numeric"
                        placeholder="Masukan NIP"
                        value={dokterData.NIP}
                        onChangeText={(value) => onChangeHandle('NIP', value)}
                        />
                </View>
                <View>
                    <Text>Nama Dokter</Text>
                    <TextInput 
                        style={tambah_style.form_box} 
                        placeholder="Masukan Nama"
                        value={dokterData.nama}
                        onChangeText={(value) => onChangeHandle('nama', value)}
                    />
                </View>
                <View>
                    <Text>Pengalaman</Text>
                    <TextInput
                        style={tambah_style.form_box} 
                        keyboardType="numeric"
                        placeholder="Masukan Pengalaman Dokter"
                        value={dokterData.pengalaman}
                        onChangeText={(value) => onChangeHandle('pengalaman', value)}
                    />
                </View>
                <View>
                    <Text>Jumlah Pasien Harian</Text>
                    <TextInput
                        style={tambah_style.form_box} 
                        keyboardType="numeric"
                        placeholder="Masukan Jumlah Pasien Harian"
                        value={dokterData.jumlah_pasien}
                        onChangeText={(value) => onChangeHandle('jumlah_pasien', value)}
                    />
                </View>
                <View>
                    <Text>Rating</Text>
                    <TextInput
                        style={tambah_style.form_box} 
                        keyboardType="numeric"
                        placeholder="Masukan Rating Dokter"
                        value={dokterData.rating}
                        onChangeText={(value) => onChangeHandle('rating', value)}
                    />
                </View>
                <View>
                    <Text>Deskripsi</Text>
                    <TextInput
                        multiline
                        numberOfLines={4}
                        style={tambah_style.form_box} 
                        keyboardType=""
                        value={dokterData.deskripsi}
                        placeholder="Masukan Rating Dokter"
                        onChangeText={(value) => onChangeHandle('deskripsi', value)}
                    />
                </View>
                <View>
                    <Text>Foto Diri</Text>
                    {image ? (
                        <View>
                            <Image 
                                style={{width:'100%', height: 170}}
                                source={{uri: image, headers: {Authorization: 'someAuthToken'}}}
                            />
                            <TouchableOpacity style={
                                {backgroundColor:color.primary_color, 
                                position: "absolute", 
                                padding: 5,
                                borderRadius: 20, 
                                right: 5,
                                bottom: 10,
                                borderStyle: "solid"}}
                                onPress={() => setImage(null)}
                                >
                                <Trash
                                    size="20"
                                    color="white"
                                    variant="bold"
                                />
                            </TouchableOpacity>
                        </View>
                        
                    ):(
                        <TouchableOpacity
                            onPress={imagePick}
                            style={tambah_style.image_box}
                        >
                            <AddCircle
                                variant="bold"
                                size={40}
                                color="grey"/>
                            <Text>Ambil Gambar</Text>
                        </TouchableOpacity>
                    )}
                </View>
                <TouchableOpacity 
                    style={tambah_style.proses_button}
                    onPress={updateDokter}
                >
                    <Text style={{fontSize:15, fontWeight: "bold", color: "white"}}>UBAH DATA DOKTER</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const tambah_style = StyleSheet.create({
    form_box : {
        padding: 12,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        marginTop:5, 
        marginBottom: 10
    },
    image_box : {
        flexDirection: "column",
        padding: 12,
        paddingBottom: 20, 
        paddingTop: 20,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        borderStyle:"dotted", 
        alignItems: "center"
    },
    proses_button : {
        alignItems: "center", 
        width: '100%',
        marginTop: 20, 
        marginBottom: 15,
        padding: 12,
        backgroundColor: color.primary_color,
        borderRadius: 25
    }
});
export default UpdateDokter;