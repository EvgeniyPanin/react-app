const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT";

const createNewMessage = (messages, text) => {
  const newMessage = {
    message: text,
    id: messages.length + 1 + "",
  };
  return newMessage;
};

const initialState = {
  dialogs: [
    {
      name: "Артем",
      id: "1",
    },
    {
      name: "Василий",
      id: "2",
    },
    {
      name: "Гоша",
      id: "3",
    },
    {
      name: "Ваня",
      id: "4",
    },
    {
      name: "Диана",
      id: "5",
    },
    {
      name: "Света",
      id: "6",
    },
    {
      name: "Петя",
      id: "7",
    },
  ],
  newMessageText: "Привет, как у тебя дела?",
  messages: [
    {
      message: "Привет",
      id: "1",
    },
    {
      message: "Как день прошел?",
      id: "2",
    },
    {
      message: "Хорошо",
      id: "3",
    },
    {
      message: "У меня тоже хорошо",
      id: "4",
    },
    {
      message: "Чем занимаешься завтра вечером?",
      id: "5",
    },
    {
      message: "Не знаю, есть предложения?",
      id: "6",
    },
  ],
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = createNewMessage(state.messages, state.newMessageText);
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      }
    case CHANGE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      }
    default:
      return state;
  }
};

export function addMessage() {
  return { type: ADD_MESSAGE };
}

export function changeText(text) {
  return {
    type: CHANGE_NEW_MESSAGE_TEXT,
    newText: text,
  };
}

export default dialogReducer;
