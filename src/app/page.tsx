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
      }}
    >
      <SideBar />
    </Box>  
  );
}
