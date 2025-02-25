import Header from '@/components/Header';
import { Button, Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Header />
      <Typography variant="h4" gutterBottom>
        Q2 app with Material UI!!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Container>
  );
}
