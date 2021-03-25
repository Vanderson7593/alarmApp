import React from 'react'
import { TextInput } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/theme'


class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                ...FONTS.h2,
                fontSize: 32,
                paddingBottom: 5
            },
        };
    }

    onFocus() {
        const state = { ...this.state };
        state.style = {
            ...FONTS.h2,
            fontSize: 32,
            paddingBottom: 5,
            backgroundColor: "#D3EAFF",
            borderRadius: 6
        };
        this.setState(state);
    }

    render() {
        return (
            <TextInput
                style={this.state.style}
                onFocus={() => this.onFocus()}
                keyboardType="numeric"
                maxLength={2}

            />
        )
    }
}

export default Input;