const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';


const createNewMessage = (messages, text) => {
    const newMessage = {
      message: text,
      id: messages.length + 1 + '',
    }
    return newMessage;
};


const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = createNewMessage(state.messages, state.newMessageText);
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export function addMessageActionCreater() {
    return {type: ADD_MESSAGE}
}

export function handlerChangeMessageTextActionCreater(text) {
    return {
        type: CHANGE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogReducer;