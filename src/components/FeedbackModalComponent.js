import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

// Set the root element for the modal
Modal.setAppElement('#root');

const ModalWrapper = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.modalBackground};
  color: ${({ theme }) => theme.modalText};
  border: none;
  border-radius: 10px;
  padding: 20px;
  width: 60%;
  max-width: 400px;
  margin: auto;
`;

const FeedbackModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFeedbackText('');
  };

  const handleFeedbackChange = (e) => {
    setFeedbackText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Disable submit button while submitting
    setIsSubmitting(true);

    // Simulate a delay for submission (you can replace this with your actual submission logic)
    setTimeout(() => {
      // Reset form and close modal
      setIsSubmitting(false);
      setFeedbackText('');
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <>
      <button onClick={handleOpenModal}>Give Feedback</button>

      <ModalWrapper
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Feedback Modal"
        ariaHideApp={false}
        theme={{
          modalBackground: 'rgba(255, 255, 255, 0.9)',
          modalText: '#333',
        }}
      >
        <h2>Feedback</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your feedback here..."
            value={feedbackText}
            onChange={handleFeedbackChange}
            disabled={isSubmitting}
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          <button onClick={handleCloseModal} disabled={isSubmitting}>
            Close
          </button>
        </form>
      </ModalWrapper>
    </>
  );
};

export default FeedbackModalComponent;
