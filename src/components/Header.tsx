'use client';
import React, { useState } from 'react';
import { Typography, IconButton, Menu, MenuItem, Box } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';

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
          <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Header;
