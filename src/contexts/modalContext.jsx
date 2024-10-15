import React, { createContext, useState } from "react";

export const ModalContext = createContext({
  showModal: false, 
  setShowModal: () => {}, 
  modalData: {},
  setModalData: () => {}
});


export default function ModalContextProvider({ children }) {

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  
  return (
    <ModalContext.Provider
      value={{
        showModal, setShowModal, modalData, setModalData
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
