import "./movieModal.css";
import closeButton from "assets/images/close.svg";
import { IMovie } from "types";
import imageNotFound from "assets/images/not-found.jfif";

export interface MovieModalProps {
    toggleModal: () => void;
    movie: IMovie;
}

const MovieModal = ({ toggleModal, movie }: MovieModalProps) => {
    const { title, release_date, vote_average, vote_count, overview, poster_path } = movie;

    return (
        <div className="flex_center modal_container">
            <section className="modal">
                <img
                    src={closeButton}
                    alt="close modal"
                    className="close_modal"
                    onClick={toggleModal}
                />
                <h2 className="modal_title">{title}</h2>
                <div className="modal_description">
                    <div className="modal_image__container">
                        {poster_path ? (
                            <img
                                src={"https://image.tmdb.org/t/p/w500" + poster_path}
                                alt="movie name"
                                loading="lazy"
                                className="modal_image"
                            />
                        ) : (
                            <img
                                src={imageNotFound}
                                alt="movie name"
                                loading="lazy"
                                className="modal_image"
                            />
                        )}
                    </div>
                    <div className="about">
                        <p>
                            <strong>Release Date: </strong> {release_date}
                        </p>
                        <p>{overview}</p>
                        <p>
                            <strong>{vote_average} </strong> / 10 ({vote_count} total votes)
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MovieModal;
