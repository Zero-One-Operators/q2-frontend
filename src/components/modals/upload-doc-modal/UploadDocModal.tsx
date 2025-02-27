// Modal for uploading a file

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DescriptionIcon from '@mui/icons-material/Description';
import DeleteIcon from '@mui/icons-material/Delete';

interface UploadDocModalProps {
  open: boolean;
  onClose: () => void;
}

const UploadDocModal: React.FC<UploadDocModalProps> = ({ open, onClose }) => {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleUpload = () => {
    // Implement upload logic here....
    console.log('Uploading:', selectedFile);
  };

  const handleCloseModal = () => {
    setSelectedFile(null);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseModal}
      maxWidth="sm"
      fullWidth
      disableEnforceFocus
      disableRestoreFocus
    >
      <DialogTitle>
        <Typography variant="h6" component="span" fontWeight="bold" fontSize={25}>
          Upload File
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleCloseModal}
          sx={{ position: 'absolute', right: 8, top: 8, fontSize: 30 }}
        >
          <CloseIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ paddingBottom: '10px' }}>
      <Box
        onDragOver={(event) => {
          event.preventDefault();
          event.currentTarget.style.backgroundColor = '#f0f0f0';
        }}
        onDragLeave={(event) => {
          event.currentTarget.style.backgroundColor = 'transparent';
        }}
        onDrop={(event) => {
          handleFileDrop(event);
          event.currentTarget.style.backgroundColor = 'transparent';
        }}
        sx={{
          border: '2px dashed #ccc',
          borderRadius: '8px',
          padding: '30px',
          textAlign: 'center',
          color: '#666',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          height: '200px',
        }}
      >
        <CloudUploadIcon fontSize="inherit" sx={{ fontSize: 80, color: 'black' }} />
        <Typography variant="h6">Drop File Here</Typography>
        <Typography variant="body2">Supported formats: PDF, Word</Typography>
        <Typography variant="body2">Or</Typography>

        <Button id='browse-files' color="inherit" component="label" sx={{ fontSize: 18 }}>
          Browse File
          <input type="file" hidden accept=".pdf,.doc,.docx" onChange={handleFileSelect} />
        </Button>
      </Box>

      {selectedFile && (
        <Box
          sx={{
            backgroundColor: '#333',
            color: 'white',
            borderRadius: '8px',
            margin: '0px 16px',
            marginTop: '16px',
          }}
        >
          <List sx={{ padding: '0px' }}>
            <ListItem sx={{ padding: '2px 15px' }}>
              <ListItemIcon sx={{ minWidth: '5%' }}>
                <DescriptionIcon sx={{ color: 'white', fontSize: 30 }} />
              </ListItemIcon>
              <Box
                sx={{
                  width: '90%',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                }}
              >
                <Typography
                  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '90%',
                    paddingLeft: '20px',
                  }}
                >
                  {selectedFile.name}
                </Typography>
                <Typography
                  sx={{
                    paddingLeft: '20px',
                  }}
                >
                  {`${(selectedFile.size / 1024).toFixed(2)} KB`}
                </Typography>
              </Box>
              <Box sx={{ width: '5%', display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={handleRemoveFile}
                  sx={{
                    fontSize: 30,
                    transition: 'opacity 0.15s, background-color 0.15s',
                    '&:hover': {
                      opacity: 0.7,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <DeleteIcon sx={{ color: 'white', fontSize: 30 }} />
                </IconButton>
              </Box>
            </ListItem>
          </List>
        </Box>
      )}
    </DialogContent>


      <DialogActions sx={{ paddingBottom: '40px', paddingRight: '24px' }}>
        <Button onClick={handleCloseModal} color="inherit" sx={{ fontSize: 15 }}>
          Cancel
        </Button>
        <Button
          onClick={handleUpload}
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
          disabled={!selectedFile}
        >
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadDocModal;
