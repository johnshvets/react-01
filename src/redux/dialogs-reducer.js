const SEND_MESSAGE = "react-01/dialogs/SEND-MESSAGE";

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
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const text = action.newMessageText;

      return {
        ...state,
        messages: [...state.messages, { id: 6, message: text }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageText) => ({
  type: SEND_MESSAGE,
  newMessageText,
});

export default dialogReducer;
