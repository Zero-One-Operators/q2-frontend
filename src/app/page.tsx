import SideBar from '@/components/SideBar';
import Header from '@/components/Header';
import { Box } from '@mui/material';
import Chat from '@/components/Chat';

export default function Home() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          width: 225,
          flexShrink: 0,
          backgroundColor: '#f8f6f6',
          borderRight: '1px solid #ddd',
          marginTop: '1em',
          marginLeft: '1em',
          marginBottom: '1em',
          display: 'flex',
          flexDirection: 'column',
          padding: '10px',
        }}
      >
        <SideBar />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          margin: '1em',
          overflow: 'hidden',
          padding: '20px',
        }}
      >
        <Header />
        <Box
          sx={{
            padding: 2,
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Chat />
        </Box>
      </Box>
    </Box>
  );
}
