import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import type { GetServerSideProps } from 'next'
import getOverviewDetails from '@/lib/getOverviewDetails';
import { MovieOverviewDetails } from '@/types/common';
import { styled } from '@mui/material/styles';
import toHoursAndMinutes from '@/utils/toHoursAndMinutes';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const getServerSideProps  = (async (context) => {
    const overviewDetails = await getOverviewDetails(context.query.id as string);
    return { props: { overviewDetails: overviewDetails as MovieOverviewDetails } }
  }) satisfies GetServerSideProps<{ overviewDetails: MovieOverviewDetails }>

const Film: React.FC<{ overviewDetails: MovieOverviewDetails }> = ({ overviewDetails }) => {
  const {title, releaseDate, genres, plotSummary, ratings, plotOutline } = overviewDetails;

  return (
    <Container>
      <CardContainer sx={{ backgroundImage: `url('${title.image.url}')` }}>
        <CardBox>
          <Link href="/">
            <Box
              display="flex"
              gap="16px"
              justifyContent="center"
              alignItems="center"
              sx={{ textAlign: 'center', color: 'white', whiteSpace: 'nowrap' }}
            ><ArrowBackIcon  /> Go Back</Box>
          </Link>
          <Box display="flex" gap="30px">
            <CardMedia
              data-testid="image"
              sx={{ minWidth: 280, height: 450, borderRadius: 1 }}
              image={title.image.url}
              title="green iguana"
            />
            <CardContent sx={{ textAlign: 'left' }}>
              <Title>
                {title.title}<span>({title.year})</span>
              </Title>
              <Box display="flex" gap="24px" sx={{
                div: {
                  position: 'relative',
                  ':first-of-type:before': {
                    display: 'none'
                  },
                  ':before': {
                    fontSize: '1.1em',
                    lineHeight: 1,
                    content: '""',
                    width: 5,
                    height: 5,
                    borderRadius: '100%',
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: 9,
                    left: -14,
                    display: 'inline-flex',
                    alignContent: 'center',
                    alignItems: 'center',
                  }
                },
                
              }}>
                <div data-testid="year">{releaseDate}</div>
                <div data-testid="genres">{genres.join(', ')}</div>
                <div data-testid="runningTimeInMinutes">{toHoursAndMinutes(title.runningTimeInMinutes)}</div>
              </Box>
              <Overview>
                <Typography>Overview</Typography>
                <Typography>{plotSummary?.text ?? plotOutline?.text}</Typography>
              </Overview>
              <Box display="flex" gap="50px" marginTop="16px" alignItems="center">
                <Author alignItems="center" gap="16px">
                  <Typography>Author</Typography>
                  <Typography>{plotSummary?.author ?? '-'}</Typography>
                </Author>
                <Box display="flex" alignItems="center" gap="16px">
                  <Typography>Rating</Typography>
                  {ratings.rating ? <Rating>{ratings.rating}</Rating> : '-'}
                </Box>
              </Box>
            </CardContent>
          </Box>
        </CardBox>
      </CardContainer>
    </Container>
  );
}

const Container = styled(Card)(({ theme }) => ({
  backgroundColor: 'white'
}));

const CardContainer = styled(Card)(({ theme }) => ({
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}));

const CardBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgb(0 0 0 / 76%)',
  padding: '30px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  color: 'white',
  height: '100vh'
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 35,
  fontWeight: 700,
  color: 'white',
  display: 'flex',
  gap: 8,
  span: {
    opacity: 0.8
  }
}));

const Overview = styled(Box)(({ theme }) => ({
  marginTop: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  p: {
    fontSize: 20,
    fontWeight: 600,
    color: 'white',
    display: 'flex',
    ':last-of-type': {
      fontSize: 16,
      fontWeight: 400,
    }
  }
}));

const Author = styled(Box)(({ theme }) => ({
  display: 'flex',
  p: {
    fontSize: 16,
    fontWeight: 700,
    color: 'white',
    ':last-of-type': {
      fontSize: 14,
      fontWeight: 400,
    }
  }
}));

const Rating = styled('div')(({ theme }) => ({
  fontSize: 16,
  fontWeight: 700,
  color: 'white',
  width: 40,
  height: 40,
  borderRadius: '100%',
  backgroundColor: '#333311',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
 
export default Film;