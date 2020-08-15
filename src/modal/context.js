import React, { createContext, useState } from 'react';

const ModalContext = createContext(false);

const ModalProvider = ({ children }) => {
  const [modal, setShowModal] = useState(false);
  const [filmes, setFilme] = useState([]);
  
  const handleModal = (filme) => {
    setFilme(filme)
    setShowModal(true)
  }
  return (
    <ModalContext.Provider value={{ modal, setShowModal, filmes, handleModal}}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
