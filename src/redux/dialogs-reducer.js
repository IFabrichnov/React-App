const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
        case UPDATE_NEW_MESSAGE_BODY: {
            // let stateCopy = { ...state };
            // stateCopy.newMessageBody = action.body;
            // return stateCopy;
            // то же самое
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            //     let stateCopy = { ...state,
            //     newMessageBody: '',
            //     messages: [...state.messages, { id: 6, message: body }]
            // };
            //     return stateCopy;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            }
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })



export default dialogsReducer;