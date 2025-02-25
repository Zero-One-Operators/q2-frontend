import SideBar from '@/components/sideBar';
import Header from '@/components/Header';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        margin: '0',
        padding: '1em',
        backgroundColor: 'white',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <SideBar />

      <Box sx={{ backgroundColor: 'white', width: '100%', height: '300px', color: 'white' }}>
        {/* ****** Put your components here ****** */}
        {/* If we need more padding between the sidebar and the left page, we can add another box as a container here */}
        <Header />
        <p> Put your header and chat components here </p>

      </Box>
    </Box>
  );
}
