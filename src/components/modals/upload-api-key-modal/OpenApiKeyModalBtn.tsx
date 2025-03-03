import { MenuItem } from '@mui/material';

import React, { useState } from 'react';
import ApiKeyModal from './ApiKeyModal';

interface OpenApiKeyModalBtnProps {
  handleMenuClose: () => void;
}

export default function OpenApiKeyModalBtn({ handleMenuClose }: OpenApiKeyModalBtnProps) {
  const [openApiModal, setOpenApiModal] = useState<boolean>(false);

  const openApiKeyModal = () => {
    handleMenuClose();
    setOpenApiModal(true);
  };

  const closeApiModal = () => {
    setOpenApiModal(false);
  };

  return (
    <>
      <MenuItem onClick={openApiKeyModal}>Add API Key and Model</MenuItem>
      <ApiKeyModal onOpen={openApiModal} onClose={closeApiModal} />
    </>
  );
}
