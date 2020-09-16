const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  dialogs: [
    { id: 1, name: "Viktor" },
    { id: 2, name: "Valentyn" },
    { id: 3, name: "Lesia" },
    { id: 4, name: "Julia" },
  ],

  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "!" },
  ],
  newMessageText: "",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newText };
    case SEND_MESSAGE:
      const text = state.newMessageText;

      return {
        ...state,
        messages: [...state.messages, { id: 6, message: text }],
        newMessageText: "",
      };
    default:
      return state;
  }
};

export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});
export const sendMessageCreator = (text) => ({
  type: SEND_MESSAGE,
  message: text,
});

export default dialogReducer;
