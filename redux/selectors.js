import React from 'react'
import { createSelector } from 'reselect'


const getAlarms = state => state.alarm.alarms

const getAlarm = (state, id) => state.alarm.alarms.filter(a => a.id == id)

export const getAllAlarms = createSelector(
    getAlarms,
    alarms => alarms
)

export const getAlarmById = createSelector(
    getAlarm,
    alarms => alarms
)
