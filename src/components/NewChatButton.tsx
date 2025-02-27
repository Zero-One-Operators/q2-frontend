import { Typography, Button, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
const NewChatButton = () => {
  return (
    <>
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
    </>
  );
};

export default NewChatButton;
