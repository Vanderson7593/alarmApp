import React from 'react'
import { Text } from 'react-native';
const moment = require('moment');

export const showTime = (date) => {

    var date = new Date(date)

    return (
        <Text>{date.getHours()}:{date.getMinutes()}</Text>
    )
}