export interface Movie {
  poster_path: string,
  adult: boolean,
  overview: string,
  release_date: Date,
  genre_ids: number[],
  id: number,
  original_title: string,
  original_language: string,
  title: string,
  backdrop_path: boolean,
  popularity: number,
  vote_count: number,
  video: boolean,
  vote_average: number,
}
export interface MovieDiscover{
  page: number,
  results: Movie[],
  total_results: number,
  total_pages: number,
}
export interface Genre {
  id: number,
  name: string,
}

export interface History {
  date: Date,
  params: {}
}
