import React, { useEffect, useState } from "react"
import {Text, View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Alert} from "react-native"
import color from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import {Eye, EyeSlash } from "iconsax-react-native";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login() {
    const nav = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isPasswordVisible, setPasswordVisible] = useState(true);
    let errMsg = "";
    useEffect(() => {
        //checkToken();
    }, []);
    checkToken = async () => {
        const userDataJSON = await AsyncStorage.getItem('userData');
        if(userDataJSON){
            const userData = JSON.parse(userDataJSON);
            if(userData.token && userData.expirationTime)
            {
                const dateNow = new Date().getTime();
                if(dateNow <= userData.expirationTime){
                    nav.replace('AppFragment');
                } else {
                    nav.replace('AppFragment');
                }
            }
        }
    }
    const doLogin = async () => {
        try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(username, password);
            const token = await auth().currentUser.getIdToken();
            const expirationInMilisec = 30 * 24 * 60 * 60 * 1000;
            const expirationTime = new Date().getTime() + expirationInMilisec;
            const storeUserData = {
                token, 
                expirationTime
            }
            await AsyncStorage.setItem('userData', JSON.stringify(storeUserData));
            setLoading(false);
            nav.navigate('AppFragment');
        } catch (error) {
            console.log(error)
            setLoading(false);
            if(error.code == "auth/invalid-email"){
                errMsg = "Email anda salah";
            } else if(error.code == "auth/wrong-password"){
                errMsg = "Password anda salah";
            } else {
                errMsg = "terjadi kesalahan"
            }
            Alert.alert("Error", errMsg);
            
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
            >Login</Text>
            <Text>Lakukan login dan dapatkan pelayangan terbaik dari kami  </Text>
            <View style={body_style.login_box}>
                <View style={body_style.form_group}>
                    <Text>Username/Email</Text>
                    <TextInput style={body_style.input_box} keyboardType="email-address" placeholder="Masukan username anda" onChangeText={(value) => setUsername(value)}/>
                </View>
                <View style={body_style.form_group}>
                    <Text>Password</Text>
                    <TextInput style={body_style.input_box} secureTextEntry={isPasswordVisible} placeholder="Masukan password anda" onChangeText={(value) => setPassword(value)}/>
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

            </View>
            <View style={body_style.button_group}>
                <TouchableOpacity style={body_style.button_masuk} onPress={doLogin}>
                    {loading ? (
                        <ActivityIndicator color="white"></ActivityIndicator>
                    ) : (
                        <Text style={{textAlign:"center", fontWeight: "bold", color: "white"}}>Masuk</Text>
                    )}
                    
                </TouchableOpacity>
                <Text style={{textAlign:"center", marginBottom: 10}}>Atau</Text>
                <TouchableOpacity
                    onPress={() => nav.navigate('Register')}
                    style={body_style.button_register}>
                    <Text style={{textAlign:"center", fontWeight: "bold", color: color.primary_color}}>Daftar Sekarang</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
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
        marginTop: 10,
        marginBottom: 20
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
    }
});