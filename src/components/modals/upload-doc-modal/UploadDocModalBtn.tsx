
import {  MenuItem } from '@mui/material';

import React, { useState } from 'react';
import UploadDocModal from './UploadDocModal';

interface UploadDocModalBtnProps {
  handleMenuClose: () => void;
}

export default function UploadDocModalBtn({  handleMenuClose }: UploadDocModalBtnProps) {
    
  const [docModalOpen, setDocModalOpen] = useState(true);

  const openDocUploadModal = () =>{
    handleMenuClose();
    setDocModalOpen(true);
  }

  const closeDocModal = () => setDocModalOpen(false);

  return (
    <>
     <MenuItem onClick={openDocUploadModal}>Upload Document</MenuItem>
     <UploadDocModal open={docModalOpen} onClose={closeDocModal} />
    </>
  );
}
