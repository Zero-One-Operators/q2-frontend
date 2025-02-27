'use client';

import { Box } from '@mui/material';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import { Typography } from '@mui/material';
import NewChatButton from './NewChatButton';

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
            <NewChatButton />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
