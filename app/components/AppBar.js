import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { ArrowLeft } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
export default function AppBar(props) {
    const nav = useNavigation();
    return (
        <View style={{flexDirection: "row"}}>
                <TouchableOpacity
                    onPress={() => nav.goBack()}
                >
                    <ArrowLeft 
                        variant="linear"
                        color="black"
                        size={30}
                    />
                </TouchableOpacity>
                <Text style={{fontSize: 20, color: "black", fontWeight: "bold", marginLeft: 10}}>{props.title}</Text>
        </View>
    );
}