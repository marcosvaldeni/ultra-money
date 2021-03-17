import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/api';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal(
  { 
    isOpen, 
    onRequestClose 
  }: NewTransactionModalProps) {

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
      event.preventDefault();

      const data = {
        title,
        value,
        category,
        type,
      };

      api.post('/transactions', data);
    }

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}  
      >
        <img src={closeImg} alt="Close modal" />
      </button>
      <Container>
        <h2>Register transaction</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Amont"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income"/>
            <span>Income</span>
          </RadioBox>

          <RadioBox 
            type="button"
            onClick={() => { setType('withdrwaw'); }}
            isActive={type === 'withdrwaw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Income"/>
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Category"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button onClick={handleCreateNewTransaction} type="submit">
          Register
        </button>

      </Container>

    </Modal>
  );
}