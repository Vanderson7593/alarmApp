import React from 'react'
import { FlatList, Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import icons from '../constants/icons'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import { daysOfWeek } from '../constants/app'
import { connect } from 'react-redux'
import { getAllAlarms } from '../redux/selectors'
import { toggleAlarm } from '../redux/actions'
import { showTime } from '../helpers'


const Home = ({ alarms, dispatch, navigation }) => {

    const renderHeader = () => (
        <View style={styles.header}>

            <Text
                style={{
                    ...FONTS.h2,
                    color: COLORS.primary
                }}
            >
                Alarmes
                </Text>
            <TouchableOpacity
                onPress={() => { navigation.navigate('NewAlarm') }}
            >
                <Image
                    source={icons.plus}
                    resizeMode="contain"
                    style={{
                        height: 18,
                        width: 18
                    }}
                />
            </TouchableOpacity>
        </View>
    )

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("AlarmDetails", {
                    id: item.id
                })
            }}
        >
            <View style=
                {{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: SIZES.padding2 * 2
                }}>
                <View>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={styles.text}>
                            {showTime(item.time)}
                        </Text>
                        <Text style={{
                            ...FONTS.body5_1,
                            marginTop: 6,
                            marginLeft: 3
                        }}>AM</Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row' }}
                    >
                        {
                            item.days.length < 1 ?
                                <Text style={styles.repeatText}>Sem repetição</Text> :

                                item.days.length > 5 ?
                                    <Text style={styles.repeatText}>Todos os dias</Text> :

                                    item.days.map(item => {
                                        return (
                                            <Text
                                                key={item}
                                                style={styles.repeatText}>{daysOfWeek[item]} </Text>
                                        )
                                    })
                        }
                    </View>
                </View>
                <Switch
                    value={item.activated}
                    onValueChange={() => dispatch(toggleAlarm(item.id))}
                    thumbColor={COLORS.primary}
                    trackColor={{
                        false: COLORS.lightGray,
                        true: COLORS.lightGray
                    }}
                />
            </View>
        </TouchableOpacity>
    )

    const renderFlatFist = () => (
        <FlatList
            renderItem={renderItem}
            data={alarms}
            key={item => item.id}
            style={{ paddingVertical: SIZES.padding * 2 }}
            ListEmptyComponent={<View>
                <Text>Vazia</Text>
            </View>}
        />
    )

    return (
        <View style={styles.mainView}>
            {renderHeader()}
            {renderFlatFist()}
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        padding: SIZES.padding * 2
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text: {
        ...FONTS.h2
    },
    repeatText: {
        ...FONTS.body4_1,
        color: COLORS.gray
    }
})

const mapDispatchToProps = dispatch => {

    return {
        onToggleAlarm: id => {
            dispatch(toggleAlarm(id))
        }
    }
}

const mapStateToProps = state => {
    const alarms = getAllAlarms(state)
    return { alarms };
};

export default connect(mapStateToProps)(Home)