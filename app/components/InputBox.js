import React from "react"
import {View, Text, TextInput, StyleSheet} from "react-native"

const InputText = (props) => {
    return (
        <TextInput
            style={input_style.input_text}
            placeholder={props.placeholder}
            onFocus={{borderColor: "#1873ac"}}
        />
    );
} 
const input_style = StyleSheet.create({
    input_text : {
        padding: 12,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10
    }
})
export default InputText