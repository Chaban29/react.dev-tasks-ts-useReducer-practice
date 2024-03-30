import { FC, useReducer } from 'react';
import './App.css';
import { initialState, messengerReducer } from './components/messengerReducer';
import { usersContacts } from './components/contacts';
import { ContactsList } from './components/ContactsList';
import { Chat } from './components/Chat';

export const App: FC = () => {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.messages[state.selectedId];
  const contact = usersContacts.find((c) => c.id === state.selectedId);
  return (
    <div>
      <ContactsList
        contacts={usersContacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      {contact && (
        <Chat
          key={contact.id}
          message={message}
          contact={contact}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};
