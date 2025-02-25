import SideBar from '@/components/sideBar';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        margin: '0',
        padding: '1em',
        backgroundColor: '#6e6eb5',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <SideBar />

      <Box sx={{ backgroundColor: 'blue', width: '100%', height: '300px', color: 'white' }}>
        {/* Put your components here, will most likely need a box*/}
        <p> Put your header and chat components here </p>
      </Box>
    </Box>
  );
}
