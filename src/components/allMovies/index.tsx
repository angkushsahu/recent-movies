import "./allMovies.css";
import { useCallback, useDeferredValue, useEffect, useState } from "react";
import Header from "components/header";
import MovieCard from "components/movieCard";
import { IMovie, IReceivedData } from "types";
import getTimeRange from "utils/getCurrentMonth";

const AllMovies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [search, setSearch] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const defferedSearch = useDeferredValue(search);
    const { lastMonth, thisMonth } = getTimeRange();

    const incrementPageNumber = () => {
        if (pageNumber === 1) {
            return;
        }
        setPageNumber((prev) => prev - 1);
    };

    const decrementPageNumber = () => {
        if (pageNumber === totalPages) {
            return;
        }
        setPageNumber((prev) => prev + 1);
    };

    const getAllMovies = useCallback(async () => {
        try {
            const searchQuery = `https://api.themoviedb.org/3/${
                defferedSearch.length
                    ? `search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${defferedSearch}&page=${pageNumber}`
                    : `discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&primary_release_date.gte=${lastMonth}&primary_release_date.lte=${thisMonth}&page=${pageNumber}`
            }`;
            const request = await fetch(searchQuery);
            const data: IReceivedData = await request.json();

            if (data) {
                setMovies(data.results);
                setTotalPages(data.total_pages);
            }
        } catch (error) {
            console.log(error);
        }
    }, [defferedSearch, pageNumber, lastMonth, thisMonth]);

    useEffect(() => {
        getAllMovies();
    }, [getAllMovies, defferedSearch, pageNumber]);

    return (
        <section>
            <Header search={search} setSearch={setSearch} />
            <main>
                {movies?.length ? (
                    <>
                        <h1>Most Recent Movies</h1>
                        <section className="show_all__movies">
                            {movies?.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </section>
                        <div className="flex_center button_group">
                            <button
                                type="button"
                                onClick={incrementPageNumber}
                                className={pageNumber === 1 ? "disabled" : ""}
                            >
                                Previous
                            </button>
                            <button
                                type="button"
                                onClick={decrementPageNumber}
                                className={pageNumber === totalPages ? "disabled" : ""}
                            >
                                Next
                            </button>
                        </div>
                    </>
                ) : (
                    <h2 className="center_text">No results found ....</h2>
                )}
            </main>
        </section>
    );
};

export default AllMovies;
