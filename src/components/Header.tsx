'use client';
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight="bold">
          Latest Chat
        </Typography>
        <Box display="flex" alignItems="center">
          <IconButton edge="end" color="inherit" aria-label="delete" onClick={handleDeleteClick}>
            <DeleteTwoToneIcon />
          </IconButton>
          <Box position="relative">
            <IconButton
              edge="end"
              color="inherit"
              aria-label="more options"
              onClick={handleMenuOpen}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <MoreVertTwoToneIcon />
            </IconButton>
            {isClient && (
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                PaperProps={{ sx: { mt: 1 } }}
              >
                <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
                <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
              </Menu>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
