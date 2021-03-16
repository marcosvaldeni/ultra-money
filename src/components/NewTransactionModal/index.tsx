import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Register transaction</h2>

        <input
          placeholder="Title"
        />

        <input
          placeholder="Amont"
        />

        <input
          placeholder="Category"
        />

        <button type="submit">Register</button>

      </Container>

    </Modal>
  );
}