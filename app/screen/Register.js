import React, { useState } from "react"
import {Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, ActivityIndicator} from "react-native"
import color from "../config/colors";
import { Activity, Eye, EyeSlash } from "iconsax-react-native";
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";
const Register = () => {
    const [loading, setLoading] = useState(false);
    const nav = useNavigation();
    const [isPasswordVisible, setPasswordVisible] = useState(true);
    const [isConfirmVisible, setIsConfirmVisible] = useState(true);
    const [confirm, setConfirm] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [dataRegister, setDataRegsiter] = useState({
        nama : '',
        email : '',
        password : '',
    });
    const handleKeyRegister = (key, value) => {
        setDataRegsiter({
            ...dataRegister, 
            [key] : value,
        })
    }
    const doRegister = async () => {
        //console.log(dataRegister);
        if(dataRegister.password !== confirm)
        {
            setErrMsg('password tidak sama');
        } else if(dataRegister.password.length < 8){
            setErrMsg('password kurang dari 8 karakter');
        } else {
            setLoading(true);
            try {
                await auth().createUserWithEmailAndPassword(dataRegister.email, dataRegister.password);
                await firestore()
                .collection('users')
                .doc(auth().currentUser.uid)
                .set(dataRegister)
                .then(() => {
                    console.log('Berhasil register');
                });
                nav.goBack();
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
    }
    return (
        <View style={body_style.main_body}>
            <Text
                style={{
                    color: "black",
                    fontSize: 25, 
                    fontWeight: "600",
                    marginBottom: 12
                }}
            >Register</Text>
            <Text>Buat akun anda dan nikmati layanan Kami  </Text>
            <View style={body_style.login_box}>
                <View style={body_style.form_group}>
                    <Text>Nama Lengkap</Text>
                    <TextInput style={body_style.input_box} placeholder="Masukan username anda" onChangeText={(value) => handleKeyRegister('nama', value)}/>
                </View>
                <View style={body_style.form_group}>
                    <Text>Username/Email</Text>
                    <TextInput style={body_style.input_box} keyboardType="email-address" placeholder="Masukan username anda" onChangeText={(value) => handleKeyRegister('email', value)}/>
                </View>
                <View style={body_style.form_group}>
                    <Text>Password</Text>
                    <TextInput style={body_style.input_box} secureTextEntry={isPasswordVisible} placeholder="Masukan password anda" onChangeText={(value) => handleKeyRegister('password', value)}/>
                    <TouchableOpacity
                        onPress={() => {
                            isPasswordVisible ? setPasswordVisible(false) : setPasswordVisible(true)
                        }}
                    >
                        {
                            isPasswordVisible ? (
                                <EyeSlash 
                                    style={{position: "absolute", bottom: 15, right: 10}}
                                    variant="Linear"
                                    color="grey"
                                    size={20}
                                /> 
                            ) : (
                                <Eye 
                                    style={{position: "absolute", bottom: 15, right: 10}}
                                    variant="Linear"
                                    color="grey"
                                    size={20}
                                />
                            )
                        }
                        
                    </TouchableOpacity>
                </View>
                <View style={body_style.form_group}>
                    <Text>Konfirm Password</Text>
                    <TextInput style={body_style.input_box} secureTextEntry={isConfirmVisible} placeholder="Masukan konfirmasi password" onChangeText={(value) => {setConfirm(value); setErrMsg("")}}/>
                    <TouchableOpacity
                        onPress={() => {
                            isConfirmVisible ? setIsConfirmVisible(false) : setIsConfirmVisible(true)
                        }}
                    >
                        {
                            isConfirmVisible ? (
                                <EyeSlash 
                                    style={{position: "absolute", bottom: 15, right: 10}}
                                    variant="Linear"
                                    color="grey"
                                    size={20}
                                /> 
                            ) : (
                                <Eye 
                                    style={{position: "absolute", bottom: 15, right: 10}}
                                    variant="Linear"
                                    color="grey"
                                    size={20}
                                />
                            )
                        }
                        
                    </TouchableOpacity>
                    <Text style={body_style.err_msg}>{errMsg}</Text>
                </View>
            </View>
            <View style={body_style.button_group}>
                <TouchableOpacity style={body_style.button_masuk} onPress={doRegister}>
                    {loading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text style={{textAlign:"center", fontWeight: "bold", color: "white"}}>Daftar</Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => nav.goBack()}
                >
                    <Text style={{textAlign: "center", fontWeight: "bold"}}>Kembali Ke Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Register;
const body_style = StyleSheet.create({
    main_body : {
        marginLeft: 15,
        marginRight: 20,
        marginTop: 30,
        height: '100%'
    },
    login_box : {
        marginTop: 20
    }, 
    form_group : {
        marginTop: 15,
        marginBottom: 15
    }, 
    input_box: {
        padding: 12, 
        borderRadius: 15,
        borderStyle: "solid",
        borderColor: "grey",
        borderWidth: 1
    },
    button_group: {
        position: "absolute",
        bottom: 50,
        width: '100%'
    },
    button_masuk : {
        justifyContent: "center",
        padding: 15,
        width: '100%',
        backgroundColor: color.primary_color, 
        borderRadius: 15, 
        marginBottom: 15,
    },
    button_register : {
        justifyContent: "center",
        padding: 15,
        width: '100%',
        borderColor: color.primary_color, 
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 15
    },
    err_msg : {
        color: "red",
        fontSize: 12
    }
});