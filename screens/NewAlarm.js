import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Slider from '@react-native-community/slider';
import DatePicker from 'react-native-date-picker'
import { Root, Popup, Toast } from 'popup-ui'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import icons from '../constants/icons'
import Input from '../components/Input'
import WeekDay from '../components/WeekDay'
import Button from '../components/Button'
import { connect } from 'react-redux'
import { addAlarm } from '../redux/actions'
const moment = require('moment');


const NewAlarm = ({ navigation, dispatch }) => {

    const [form, setForm] = React.useState({
        tag: "Alarme",
        time: new Date(),
        days: [],
        volume: 100,
        activated: true
    })

    function handleWeekday(day) {

        var temp = form.days

        var index = temp.indexOf(day)
        if (index === -1) temp.push(day)
        else temp.splice(index, 1)

        setForm({
            ...form,
            days: temp
        })
    }

    const renderHeader = () => (
        <View style={styles.header}>

            <TouchableOpacity
                onPress={() => { navigation.navigate('Home') }}
            >
                <Image
                    source={icons.leftArrow}
                    resizeMode="contain"
                    style={{
                        height: 28,
                        width: 28
                    }}
                />
            </TouchableOpacity>
            <Text
                style={{
                    ...FONTS.h2,
                    color: COLORS.primary,
                    marginLeft: SIZES.padding2 * 2
                }}
            >
                Novo alarme
                </Text>
        </View>
    )

    const renderForm = () => {

        function renderTag() {
            return (
                <View
                    style={{
                        paddingTop: SIZES.padding2,
                    }}
                >
                    <Text style={styles.sectionTitle}>
                        Etiqueta
                        </Text>
                    <TextInput
                        style={{
                            borderColor: COLORS.lightGray,
                            borderWidth: 1,
                            borderRadius: 5,
                            padding: SIZES.padding2,
                            ...FONTS.body4_1,
                            color: COLORS.darkgray
                        }}
                        value={form.tag}
                        onChangeText={(text) => setForm({
                            ...form,
                            tag: text
                        })}
                    />
                </View>
            )
        }

        function renderTime() {
            return (
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: SIZES.padding2
                }}>

                    <DatePicker
                        date={form.time}
                        mode="time"
                        locale="fr"
                        is24hourSource="locale"
                        onDateChange={(date) => setForm({ ...form, time: date })}
                        textColor={COLORS.primary}
                    />
                </View>
            )
        }

        function renderWeekDays() {

            return (
                <View
                    style={{
                        paddingTop: SIZES.padding2,
                    }}
                >
                    <Text style={styles.sectionTitle}>
                        Dias da semana
                        </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingBottom: SIZES.padding2,
                            paddingTop: SIZES.padding2
                        }}
                    >
                        <WeekDay day="Seg"
                            onPress={() => handleWeekday(1)}
                        />
                        <WeekDay day="Ter"
                            onPress={() => handleWeekday(2)}
                        />
                        <WeekDay day="Qua"
                            onPress={() => handleWeekday(3)}
                        />
                        <WeekDay day="Qui"
                            onPress={() => handleWeekday(4)}
                        />
                        <WeekDay day="Sex"
                            onPress={() => handleWeekday(5)}
                        />
                        <WeekDay day="Sáb"
                            onPress={() => handleWeekday(6)}
                        />
                        <WeekDay day="Dom"
                            onPress={() => handleWeekday(7)}
                        />
                    </View>
                </View >
            )

        }

        function renderSound() {
            return (
                <View
                    style={{
                        paddingTop: SIZES.padding2
                    }}
                >
                    <Text style={styles.sectionTitle}>
                        Som do alarme
                    </Text>

                    <View
                    // style={{ paddingVertical: SIZES.padding2 }}
                    >
                        <TouchableOpacity
                            onPress={() => { }}
                        >
                            <View
                                style={{
                                    borderColor: COLORS.lightGray,
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    padding: SIZES.padding2,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={{
                                    ...FONTS.body4_1,
                                    color: COLORS.darkgray
                                }}>
                                    Coldplay - Viva la vida
                                </Text>
                                <Image
                                    source={icons.downArrow}
                                    resizeMode="contain"
                                    style={{
                                        width: 14,
                                        height: 18
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            )
        }

        function renderVolume() {
            return (
                <View
                    style={{
                        paddingVertical: SIZES.padding2
                    }}
                >
                    <Text style={styles.sectionTitle}>
                        Volume do alarme
                    </Text>

                    <View
                        style={{ marginVertical: SIZES.padding2 * 2 }}
                    >
                        <Slider
                            style={{ width: "100%", height: 32 }}
                            minimumValue={0}
                            maximumValue={100}
                            value={form.volume}
                            minimumTrackTintColor={COLORS.primary}
                            maximumTrackTintColor={COLORS.gray}
                            thumbTintColor={COLORS.primary}
                        />
                    </View>

                </View>
            )
        }

        function renderFooter() {
            return (
                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <Button onPress={() => navigation.navigate('Home')}
                        type="Outline" text="Cancelar" />
                    <Button
                        onPress={() => {
                            Toast.show({
                                title: 'Feito',
                                text: 'Alarme definido para daqui há 2 horas',
                                color: COLORS.primary,
                            })
                            dispatch(addAlarm(form))
                        }}
                        text="OK" />
                </View>
            )
        }

        return (
            <View>
                <View
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {renderTime()}
                </View>
                <View>
                    {renderTag()}
                    {renderWeekDays()}
                    {renderSound()}
                    {renderVolume()}
                </View>
                <View
                    style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                    }}
                >
                    {renderFooter()}
                </View>
            </View>
        )
    }

    return (
        <Root>
            <View style={styles.mainView}>
                {renderHeader()}
                {renderForm()}
            </View>
        </Root>
    )
}

const styles = StyleSheet.create({
    mainView: {
        padding: SIZES.padding * 2,
    },
    header: {
        flexDirection: "row",
        // justifyContent: "space-between",
        alignItems: "center"
    },
    text: {
        ...FONTS.h2,
        fontSize: 32,
    },
    sectionTitle: {
        ...FONTS.body3_1,
        color: COLORS.primary
    },
})

export default connect()(NewAlarm)