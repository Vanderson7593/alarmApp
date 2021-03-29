import React from 'react'
import { createSelector } from 'reselect'


export const selectAlarms = createSelector(
    state => state
)

export const teste = (state) => {
    console.log(selectAlarms(state))
}

export const getAlarmsState = store => store

export const getAlarmsList = store =>
    getAlarmsState(store) ? getAlarmsState(store) : [];

export const getAlarmById = (store, id) =>
    getAlarmsState(store) ? { ...getAlarmsState(store)[id], id } : {};
