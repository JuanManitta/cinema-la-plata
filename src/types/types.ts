export interface Genre {
    id: number;
    name: string;
}

export interface Movie {
    id: number;
    title: string;
    genre_ids: number[];
    vote_average: number;
    poster_path: string
    overview: string
}

export interface singleMovie {
    title: string;
    release_date: string;
    vote_average: number;
    overview: string;
    runtime: number
    poster_path: string;
    genres: Genre[]
}

export interface GenreListResponse {
    genres: Genre[]
}

export interface MovieInTheatersRespone {
    results: Movie[];
    
}