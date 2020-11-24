const SEND_MESSAGE = "react-01/dialogs/SEND-MESSAGE";

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  id: number;
  message: string;
};

const initialState = {
  dialogs: [
    { id: 1, name: "Viktor" },
    { id: 2, name: "Valentyn" },
    { id: 3, name: "Lesia" },
    { id: 4, name: "Julia" },
  ] as Array<DialogType>,

  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "!" },
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;

const dialogReducer = (state = initialState, action: any): InitialStateType => {
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

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE;
  newMessageText: string;
};

export const sendMessageCreator = (
  newMessageText: string
): SendMessageCreatorActionType => ({
  type: SEND_MESSAGE,
  newMessageText,
});

export default dialogReducer;
