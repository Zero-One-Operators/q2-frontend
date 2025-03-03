'use client';
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Button,
  Typography,
  IconButton,
  TextField,
  MenuItem,
} from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import CloseIcon from '@mui/icons-material/Close';

interface ApiKeyProps {
  onOpen: boolean;
  onClose: () => void;
}

const ApiKeyModal: React.FC<ApiKeyProps> = ({ onOpen, onClose }) => {
  if (!onOpen) return null;

  const closeModal = () => {
    onClose();
  };

  //const handleEnter: {
  // function to enter/submit
  //}

  const modelDropdownChoice = [
    {
      value: 'chatGpt',
      label: 'Chat GPT',
    },
    /* Add other models here
    {

      value: '',
      label: '',
    },
    {
      value: '',
      label: '',
    }
     */
  ];

  return (
    <Dialog
      open={onOpen}
      onClose={closeModal}
      maxWidth="sm"
      fullWidth
      disableEnforceFocus
      disableRestoreFocus
    >
      <DialogTitle>
        <Typography variant="h6" component="span" fontWeight="bold" fontSize={25}>
          Add API Key
        </Typography>
        <IconButton
          // top right close button
          onClick={closeModal}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ paddingBottom: '10px' }}>
        <Box
          sx={{
            padding: '30px',
            color: '#666',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            height: '200px',
          }}
        >
          <Typography variant="subtitle1" component="span" fontWeight="bold">
            API Key
          </Typography>

          <Box
            sx={{ display: 'flex', alignItems: 'flex-end', width: '100%', marginBottom: '15px' }}
          >
            <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              id="api-input"
              variant="filled"
              size="small"
              fullWidth
              label="Enter your API key"
            />
          </Box>

          <Typography variant="subtitle1" component="span" fontWeight="bold">
            Model
          </Typography>
          <TextField
            id="model-selection-input"
            select
            label=""
            defaultValue=""
            size="small"
            helperText="Please select your model"
            fullWidth
          >
            {modelDropdownChoice.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </DialogContent>

      <DialogActions sx={{ paddingBottom: '40px', paddingRight: '24px' }}>
        <Button // Cancel button
          onClick={closeModal}
          color="inherit"
          sx={{ fontSize: 15 }}
        >
          Cancel
        </Button>

        <Button //Enter Button
          //onClick={handleEnter}
          variant="contained"
          sx={{
            backgroundColor: '#4D4D4D',
            color: 'white',
            transition: 'opacity 0.15s',
            fontSize: 15,
            '&:hover': {
              backgroundColor: '#4D4D4D',
              opacity: 0.6,
            },
          }}
        >
          Enter
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApiKeyModal;
