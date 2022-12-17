export interface IMovie {
    id: string;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
}

export interface IReceivedData {
    results: IMovie[];
    page: number;
    total_pages: number;
}
