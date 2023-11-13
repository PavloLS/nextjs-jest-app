import { MovieOverviewDetails } from "@/types/common";

const getOverviewDetails = async (id: string) => {
  const url = `${process.env.BASE_API_URL}/title/get-overview-details?tconst=${id}`;
  let details: MovieOverviewDetails | null = null;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY ?? "",
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    },
    params: {
        tconst: id,
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    details = result
  } catch (error) {
    console.error(error);
  }

  return details ?? {};
};

export default getOverviewDetails;