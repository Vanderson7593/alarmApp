import { ADD_ALARM, TOGGLE_ALARM, UPDATE_ALARM } from "./actionTypes";

let nextAlarmId = 1;

export const addAlarm = content => ({
    type: ADD_ALARM,
    payload: {
        id: ++nextAlarmId,
        content
    }
});

export const toggleAlarm = id => ({
    type: TOGGLE_ALARM,
    payload: { id }
});

export const updateAlarm = content => ({
    type: UPDATE_ALARM,
    payload: { content }
});