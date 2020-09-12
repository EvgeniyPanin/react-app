const ADD_MESSAGE = "DIALOG/ADD-MESSAGE";

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
  messages: [
    {
      message: "Привет",
      id: "1",
    },
    {
      message: "Привет бро",
      id: "2",
    },
    {
      message: "Чем занимаешься?",
      id: "3",
    },
    {
      message: "Реакт вот учу",
      id: "4",
    },
    {
      message: "Кул, давай учить и пилить соцсеть вместе",
      id: "5",
    }
  ],
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = createNewMessage(state.messages, action.newMessage);
      return {
        ...state,
        messages: [...state.messages, newMessage],
      }
    default:
      return state;
  }
};

export function addMessage(newMessage) {
  return { type: ADD_MESSAGE, newMessage };
}

export default dialogReducer;
