import { ChangeEvent, Dispatch, FC } from 'react';
import { IContacts } from './contacts';
import { ActionsTypes, TypeActions } from './messengerReducer';

interface IChatProps {
  contact: IContacts;
  message: string;
  dispatch: Dispatch<TypeActions>;
}

export const Chat: FC<IChatProps> = ({ contact, message, dispatch }) => {
  const handleChangedMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: ActionsTypes.EDITED,
      message: event.target.value,
    });
  };

  const handleSendMessage = () => {
    dispatch({ type: ActionsTypes.SEND, message: message });
  };

  return (
    <section className='chat'>
      <textarea
        name='chat'
        id='chat'
        value={message}
        placeholder={`Chat to ${contact.name}`}
        onChange={handleChangedMessage}
      />
      <br />
      <button type='button' onClick={handleSendMessage}>
        Send to {contact.email}
      </button>
    </section>
  );
};
