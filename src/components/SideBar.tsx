'use client';

import { Box } from '@mui/material';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import { Typography, Button } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const SideBar = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          width: '100%',
          marginTop: '10px',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '95%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              height: '2em',
              alignItems: 'center',
              marginBottom: '1em',
            }}
          >
            <ReviewsOutlinedIcon sx={{ mr: 1, fontSize: '2.2em' }} />
            <Typography variant="h1" fontWeight="bold" fontSize="20px">
              Q2 Chat
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              sx={{
                marginBottom: '1em',
                width: '100%',
                borderRadius: 0,
                backgroundColor: '#5b616b',
                height: '2.25em',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
              >
                <AddOutlinedIcon
                  sx={{
                    fontSize: '20px',
                    fontWeight: '200',
                    margin: '1px 3px 0 0', // adjust icon because text and icon are different sizes
                  }}
                />
                <Typography
                  variant="button"
                  fontWeight="400"
                  fontSize="14px"
                  sx={{ textTransform: 'none' }}
                >
                  New chat
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
