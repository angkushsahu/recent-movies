import "./movieCard.css";
import { useState } from "react";
import MovieModal from "../movieModal";
import { IMovie } from "types";
import imageNotFound from "assets/images/not-found.jfif";

export interface MovieCardProps {
    movie: IMovie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal((modal) => !modal);
    };

    return (
        <>
            {showModal ? <MovieModal toggleModal={toggleModal} movie={movie} /> : null}
            <article className="movie" onClick={() => setShowModal(true)}>
                <span className="flex_center movie_rating">{movie?.vote_average}</span>
                {movie?.poster_path ? (
                    <img
                        src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
                        alt="movie name"
                        loading="lazy"
                        className="movie_image"
                    />
                ) : (
                    <img
                        src={imageNotFound}
                        alt="movie name"
                        loading="lazy"
                        className="movie_image"
                    />
                )}
                <p className="movie_title">{movie?.title}</p>
            </article>
        </>
    );
};

export default MovieCard;
