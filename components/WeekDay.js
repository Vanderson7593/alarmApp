import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/theme'


class WeekDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            style: {
                view: {}, button: {}, text: {
                    ...FONTS.body4_1,
                }
            }
        };
    }

    componentDidMount() {
        const state = { ...this.state };
        state.selected = this.props.selected
        this.setState(state)
    }

    onPress() {
        const state = { ...this.state };
        state.selected = !this.state.selected
        state.style.button =
            [state.selected ?
                styles.buttonSelected :
                styles.textUnselected
            ]
        state.style.text =
            [state.selected ?
                styles.textSelected :
                styles.textUnselected
            ]
        this.setState(state);
    }

    render() {
        return (
            <View
                style={{
                    marginHorizontal: 2
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        this.onPress()
                        this.props.onPress()
                    }
                    }
                    style={[{
                        borderRadius: 10
                    }, [this.state.selected ?
                        styles.buttonSelected :
                        styles.textUnselected
                    ]]}
                >
                    <Text style={[this.state.style.text,
                    {
                        paddingVertical: 5,
                        paddingHorizontal: 10
                    },
                    [this.state.selected ?
                        styles.textSelected :
                        styles.textUnselected
                    ]
                    ]}>{this.props.day}</Text>
                </TouchableOpacity>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    buttonSelected: {
        backgroundColor: "#1891FF"
    },
    buttonUnselected: {
        backgroundColor: "#fff"
    },
    textSelected: {
        ...FONTS.body4_1,
        color: "#fff"
    },
    textUnselected: {
        ...FONTS.body4_1,
        color: "#000"
    },
})

export default WeekDay;