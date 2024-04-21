import Modal from 'react-modal';

Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export default function ImageModal({ state, closeModal, img }) {
  return (
    <div>
      <Modal isOpen={state} onRequestClose={closeModal} style={customStyles}>
        <button onClick={closeModal}>✕</button>
        <img src={img.img} alt={img.alt} width="450px" />
      </Modal>
    </div>
  );
}
