import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { Movie } from '@/types/common';
import { styled } from '@mui/material/styles';

const MediaCard = ({ item }: { item: Movie }) => {
  return (
    <Link style={{ textDecoration: 'none' }} href={`/movie/${item?.id?.split('/')?.[2]}`}>
      <CardContainer role="listitem">
        {item?.image?.url && <CardMedia
          sx={{ height: 225 }}
          data-testid="image"
          image={item?.image?.url}
          title={item.title}
        />}
        <CardContent>
          <Title>
            <Typography data-testid="title">
              {item?.title}
            </Typography>
          </Title>
          <Box flexDirection="column" gap="8px">
            <Year data-testid="year">{item?.year}</Year>
          </Box>
        </CardContent>
      </CardContainer>
    </Link>
  );
}

const CardContainer = styled(Card)(({ theme }) => ({
  width: 250,
  height: '100%',
  borderRadius: 8,
}));

const Title = styled('div')(({ theme }) => ({
  fontSize: 16,
  fontWeight: 700,
  color: '#000000',
  textDecoration: 'none',
}));

const Year = styled('div')(({ theme }) => ({
  fontSize: 16,
  fontWeight: 400,
  color: 'rgba(0, 0, 0, 0.6)',
}));
 

export default MediaCard;
