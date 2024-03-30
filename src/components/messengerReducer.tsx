import { IContacts, usersContacts } from './contacts';

interface IMessengerReducer {
  contacts: IContacts[];
  messages: { [key: number]: string };
  message: string;
  selectedId: number;
}

export const enum ActionsTypes {
  CHANGED = 'change',
  EDITED = 'edited',
  SEND = 'send',
}

export type TypeActions =
  | { type: ActionsTypes.CHANGED; message: string; selectedId: number }
  | { type: ActionsTypes.EDITED; message: string }
  | { type: ActionsTypes.SEND; message: string };

export const initialState: IMessengerReducer = {
  contacts: usersContacts,
  messages: {
    0: 'Hello Taylor',
    1: 'Hello Alice',
    2: 'Hello Bob',
  },
  message: '',
  selectedId: 0,
};

export const messengerReducer = (
  state = initialState,
  actions: TypeActions
) => {
  switch (actions.type) {
    case ActionsTypes.CHANGED: {
      return {
        ...state,
        message: actions.message,
        selectedId: actions.selectedId,
      };
    }
    case ActionsTypes.EDITED: {
      return {
        ...state,
        message: actions.message,
        messages: {
          ...state.messages,
          [state.selectedId]: actions.message,
        },
      };
    }
    case ActionsTypes.SEND: {
      return {
        ...state,
        message: actions.message,
        messages: {
          ...state.messages,
          [state.selectedId]: '',
        },
      };
    }
    default: {
      throw new Error(`Unknown action`);
    }
  }
};
