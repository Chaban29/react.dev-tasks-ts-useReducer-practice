import { Dispatch, FC } from 'react';
import { IContacts } from './contacts';
import { ActionsTypes, TypeActions } from './messengerReducer';

interface IContactsListProps {
  contacts: IContacts[];
  selectedId: number;
  dispatch: Dispatch<TypeActions>;
}

export const ContactsList: FC<IContactsListProps> = ({
  contacts,
  selectedId,
  dispatch,
}) => {
  const handleChangedMessage = (selectedId: number) => {
    dispatch({
      type: ActionsTypes.CHANGED,
      selectedId: selectedId,
      message: '',
    });
  };

  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              type='button'
              onClick={() => handleChangedMessage(contact.id)}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
