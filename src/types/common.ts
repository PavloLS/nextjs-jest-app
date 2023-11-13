export interface Movie {
  image: {
    height: number;
    url: string;
    width: number;
  }
  id: string;
  title: string;
  titleType: string;
  year: number;
}

export interface MovieDetails {
  image: {
    height: number;
    url: string;
    width: number;
  }
  id: string;
  runningTimeInMinutes: number;
  title: string;
  titleType: string;
  year: number;
}

export interface MovieOverviewDetails {
  genres: string[];
  releaseDate: string;
  plotOptions: {
    id: string;
    text: string;
  };
  plotSummary: {
    author: string;
    text: string;
  };
  plotOutline?: {text: string}
  ratings: {
    rating: number;
  };
  title: MovieDetails;
}