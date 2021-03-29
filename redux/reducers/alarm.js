import { ADD_ALARM, TOGGLE_ALARM, UPDATE_ALARM } from "../actionTypes";

const initialState = [
    // {
    //     id: "1",
    //     hour: 10,
    //     min: 30,
    //     days: [
    //         1, 3, 5, 7
    //     ],
    //     activated: true,
    //     volume: 80
    // },
    // {
    //     id: "2",
    //     hour: 10,
    //     min: 30,
    //     days: [
    //         1, 3, 5, 7
    //     ],
    //     activated: true,
    //     volume: 80
    // }
]

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_ALARM: {
            const { id, content } = action.payload;
            // console.log(content.time)
            return [
                ...state,
                {
                    ...content,
                    id: id
                }
            ]
        }

        case UPDATE_ALARM: {
            const { content } = action.payload;
            const id = content.id
            return state.map((item) => {
                if (item.id === id) {
                    return Object.assign({}, item, { ...content });
                }
                return item;
            });
        }

        case TOGGLE_ALARM: {
            const { id } = action.payload;
            return state.map((item) => {
                if (item.id === id) {
                    return Object.assign({}, item, { activated: !item.activated });
                }
                return item;
            });
        }
        default:
            return state;
    }
}