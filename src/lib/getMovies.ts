import { Movie } from "@/types/common";

const getMovies = async () => {
  const url = `${process.env.BASE_API_URL}/title/v2/find?title=1&titleType=movie&limit=20&sortArg=moviemeter%2Casc&releaseDateMin=2023-01-01`;
  let films: Movie[] = [];
  const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY ?? "",
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    },
  };
  
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    films = data.results
  } catch (error) {
    console.error(error);
  }

  return films;
};

export default getMovies;