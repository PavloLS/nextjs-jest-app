import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import type { GetStaticProps } from 'next'
import MediaCard from '@/components/Card';
import { Movie } from '@/types/common';
import getMovies from '@/lib/getMovies';
import { styled } from '@mui/material/styles';

export const getStaticProps = (async (context) => {
  const list = await getMovies();
  return { props: { list } }
}) satisfies GetStaticProps<{ list: Movie[] }>

const Home: React.FC<{ list: Movie[] }> = ({ list }) => {

  return (
    <Wrapp>
      <h1 style={{ textAlign: 'center', marginBottom: 0 }}>Movies</h1>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MoviesContainer role="list">
            {list.map((item, index) => (
              <MediaCard key={index} item={item} />
            ))}
          </MoviesContainer>
        </Box>
      </Container>
    </Wrapp>
  );
}

const Wrapp = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  height: '100vh',
  wifht: '100wv'
}));

const MoviesContainer = styled(Box)(({ theme }) => ({
  padding: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 24,
}));

export default Home;