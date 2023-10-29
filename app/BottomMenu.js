import React, { useState } from "react";
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity
} from "react-native";
import {
    Home,
    Note,
    Chart,
    User
} from "iconsax-react-native";
export default function BottomMenu()
{
    const [checkedMenu, setCheckedMenu] = useState("home");
    return (
        <View style={menu_style.body}>
            <TouchableOpacity
                style={menu_style.icon_box}
                activeOpacity={0.5}
                onPress={() => {
                    setCheckedMenu("home");
                }}>
                <Home
                    size="25"
                    color={ (checkedMenu == "home") ?  "#1873ac"  : "grey"  }
                    variant="Bold"
                />
                <Text style={ (checkedMenu == "home") ? { color: "#1873ac" } : { color: "grey" } }>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={menu_style.icon_box}
                activeOpacity={0.5}
                onPress={() => {
                    setCheckedMenu('antrian')
                }}>
                <View style={{flexDirection: "row"}}>
                    <Chart
                        style={{marginLeft: 20}}
                        size="25"
                        color={ (checkedMenu == "antrian") ?  "#1873ac"  : "grey"  }
                        variant="Bold"
                    />
                    <BadgeNotification badgeValue="50" />
                </View>
                <Text style={ (checkedMenu == "antrian") ? { color: "#1873ac" } : { color: "grey" } }>Antrian</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={menu_style.icon_box}
                activeOpacity={0.5}
                onPress={() => {
                    setCheckedMenu('riwayat')
                }}>
                <Note
                    size="25"
                    color={ (checkedMenu == "riwayat") ?  "#1873ac"  : "grey"  }
                    variant="Bold"
                />
                <Text style={ (checkedMenu == "riwayat") ? { color: "#1873ac" } : { color: "grey" } }>Buletin</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={menu_style.icon_box}
                activeOpacity={0.5}
                onPress={() => {
                    setCheckedMenu('account')
                }}>
                <User
                    size="25"
                    color={ (checkedMenu == "account") ?  "#1873ac"  : "grey"  }
                    variant="Bold"
                />
                <Text style={ (checkedMenu == "account") ? { color: "#1873ac" } : { color: "grey" } }>Account</Text>
            </TouchableOpacity>
        </View>
    );
}
const BadgeNotification = (props) => {
    return (
        <View style={menu_style.badge}>
            <Text style={menu_style.badge_font}>{props.badgeValue}</Text>
        </View>
    );
}
const menu_style = StyleSheet.create({
    body : {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    icon_box : {
        flexDirection: "column",
        alignItems:"center"
    },
    badge : {
        borderColor: "white",
        backgroundColor: "red",
        alignItems: "center",
        paddingTop: 2,
        borderRadius: 25,
        height: 20,
        width: 20,
        position: "relative",
        bottom: 8,
        right: 7,
    },
     badge_font : {
        color: "white",
        fontWeight: "bold",
        fontSize: 10
     }
});