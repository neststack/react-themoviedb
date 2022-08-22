import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import { api_key } from '../key';
import SimilarList from '../components/SimilarList';

const SingleMovie = () => {
  const { id } = useParams();

  const [loading, setLoading] = React.useState(false);
  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getMovie() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
        );
        const data = await response.json();
        if (data?.overview) {
          const {
            id,
            original_title,
            poster_path,
            overview,
            release_date,
            runtime,
          } = data;
          const newMovie = {
            id,
            name: original_title,
            image: poster_path,
            info: overview,
            date: release_date,
            runtime,
          };
          setMovie(newMovie);
        } else {
          setMovie(null);
        }
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    }
    getMovie();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!movie) {
    return <h2 className='section-title'>no movie to display</h2>;
  }

  const { name, image, info, date, runtime } = movie;

  return (
    <>
      <section className='section container-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='movieDetailContainer'>
          <div className='movie movieImage'>
            <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={name} />
          </div>
          <div className='movie movieInfo'>
            <div className='movie-info'>
              <p>
                <span className='movie-data'>name :</span>
                {name}
              </p>
            </div>
            <div className='movie-info'>
              <p>
                <span className='movie-data'>release data :</span>
                {date}
              </p>
            </div>
            <div className='movie-info'>
              <p>
                <span className='movie-data'>runtime :</span>
                {runtime}mins
              </p>
            </div>
            <div className='movie-info'>
              <p>
                <span className='movie-data'>info :</span>
                {info}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <SimilarList id={id} />
      </section>
    </>
  );
};

export default SingleMovie;
