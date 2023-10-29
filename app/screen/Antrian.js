import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import {Location} from "iconsax-react-native";
import { Data_Antrian } from "../data/data";
export default function Antrian() 
{
    return (
        <View>
            <FlatList
                data={Data_Antrian.data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => 
                <View style={card_view.card_body}>
                    <View style={{justifyContent: "center"}}>
                        <View style={card_view.card_watch}>
                            <Text style={card_view.body_watch_text}>{item.jam}</Text>
                        </View>
                    </View>
                    <View style={card_view.body_caption}>
                        <Text style={{fontSize: 18, marginBottom: 5}}>Antrian Ke : {item.antrian}</Text>
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
                </View>
                }></FlatList>
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
    }
});