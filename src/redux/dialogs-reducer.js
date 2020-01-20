const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are u?' },
        { id: 3, message: 'Yo!' },
        { id: 4, message: 'Yo!' },
        { id: 5, message: 'Yo!' },
        { id: 6, message: 'Yo!' }],
    dialogs: [
        { id: 1, name: 'Ivan' },
        { id: 2, name: 'Yulia' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Anton' },
        { id: 5, name: 'Oleg' },
        { id: 6, name: 'Alexander' }],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;

            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            }
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;