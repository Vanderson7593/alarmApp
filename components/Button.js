import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/theme'


const Button = (props) => {

    const { text, type, onPress } = props

    return (
        <TouchableOpacity
            onPress={() => { onPress() }}
            style={[styles.generalButton, type == "Outline" ?
                styles.outline :
                styles.primary
            ]}
        >
            <Text
                style={[styles.generalText, props.type == "Outline" ?
                    styles.textOutline :
                    styles.textPrimary
                ]}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    generalButton: {
        borderRadius: 4,
        borderWidth: 1.5,
        width: 100,
        marginHorizontal: 5
    },
    generalText: {
        padding: 8,
        textAlign: 'center',
        ...FONTS.body3
    },
    outline: {
        backgroundColor: "#fff",
        borderColor: "#1891FF"
    },
    primary: {
        borderColor: "#1891FF",
        backgroundColor: "#1891FF",
    },
    textOutline: {
        color: "#1891FF"
    },
    textPrimary: {
        color: "#fff"
    }
})

export default Button;