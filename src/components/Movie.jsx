import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import Cards from './partials/Cards';
import Loading from './Loading';

const Movie = () => {

    const navigate = useNavigate();

    const [category, setCategory] = useState("now_playing");
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getMovie = async () => {
        try {
            const {data} = await axios.get(`/movie/${category}?page=${page}`);
            if(data.results.length > 0) {
                setMovie((prevState) => [...prevState, ...data.results]);
                setPage(page + 1);
            }
            else {
                setHasMore(false);
            }
        }catch(error) {
            console.log("Error: ",error);
        }
    };

    const refreshHandler = () => {
        if(movie.length === 0) {
            getMovie();
        }
        else {
            setPage(1);
            setMovie([]);
            getMovie();
        }
    }

    useEffect(() => {
        refreshHandler();
        document.title = "MOVIE | MOVIE'S ";
    },[category]);

    return movie.length > 0 ? (
        <div className='w-screen h-screen'>

            <div className='px-[5%] w-full flex items-center justify-between'>
                <h1 className='text-2xl font-semibold text-zinc-400'>
                    <i 
                        onClick={() => navigate(-1)} 
                        className="hover:text-[#6556CD] ri-arrow-left-line">
                    </i>
                    Movie<small className='ml-2 text-sm text-zinc-600'>({category})</small>
                </h1>
                <div className='flex items-center w-[80%]'>
                    <Topnav />
                    <Dropdown 
                        title="Category" 
                        options={["popular", "top_rated", "upcoming", "now_playing"]} 
                        func={(e) => setCategory(e.target.value)}
                    />
                    <div className='w-[2%]'></div>
                </div> 
            </div>

            <InfiniteScroll
                loader={<h1>Loading...</h1>}
                dataLength={movie.length}
                next={getMovie}
                hasMore={hasMore}
            >
                <Cards data={movie} title="movie" />
            </InfiniteScroll>
            

        </div>
    ) : <Loading />;
};

export default Movie;
