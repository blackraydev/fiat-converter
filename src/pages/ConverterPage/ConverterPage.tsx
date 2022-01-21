import React, { useState } from 'react';
import { ConverterModal } from '../../components';
import { Button } from '../../UI';
import * as UI from './ConverterPageStyles';

export const ConverterPage = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const openModalHandler = () => {
    setModalOpened(true);
  };

  const closeModalHandler = () => {
    setModalOpened(false);
  };

  return (
    <UI.PageWrapper>
      <Button onClick={openModalHandler} value="Open pop up"></Button>
      {modalOpened && <ConverterModal onClose={closeModalHandler} />}
    </UI.PageWrapper>
  );
};
