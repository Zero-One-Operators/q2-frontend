'use client';
import React, { useState } from 'react';
import { Typography, IconButton, Menu, Box } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import UploadDocModalBtn from './modals/upload-doc-modal/UploadDocModalBtn';
import OpenApiKeyModalBtn from './modals/upload-api-key-modal/OpenApiKeyModalBtn';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteClick = () => {
    return null;
  };

  return (
    <Box
      sx={{
        width: '97%',
        bgcolor: 'white',
        borderBottom: '1px solid #ddd',
        padding: '10px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Latest Chat
      </Typography>
      <Box display="flex" alignItems="center">
        <IconButton color="default" aria-label="delete" onClick={handleDeleteClick}>
          <DeleteTwoToneIcon />
        </IconButton>
        <IconButton color="default" aria-label="more options" onClick={handleMenuOpen}>
          <MoreVertTwoToneIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          keepMounted
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <UploadDocModalBtn handleMenuClose={handleMenuClose} />
          <OpenApiKeyModalBtn handleMenuClose={handleMenuClose} />
        </Menu>
      </Box>
    </Box>
  );
};

export default Header;
