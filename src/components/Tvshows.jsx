import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import Cards from './partials/Cards';
import Loading from './Loading';

const Tvshows = () => {

    const navigate = useNavigate();

    const [category, setCategory] = useState("popular");
    const [tv, setTv] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getTv = async () => {
        try {
            const {data} = await axios.get(`/tv/${category}?page=${page}`);
            if(data.results.length > 0) {
                setTv((prevState) => [...prevState, ...data.results]);
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
        if(tv.length === 0) {
            getTv();
        }
        else {
            setPage(1);
            setTv([]);
            getTv();
        }
    }

    useEffect(() => {
        refreshHandler();
        document.title = "MOVIE | SERIES ";
    },[category]);

   return tv.length > 0 ? (
        <div className='w-screen h-screen'>

            <div className='px-[5%] w-full flex items-center justify-between'>
                <h1 className='text-2xl font-semibold text-zinc-400'>
                    <i 
                        onClick={() => navigate(-1)} 
                        className="hover:text-[#6556CD] ri-arrow-left-line">
                    </i>
                    TV SHOW'S<small className='ml-2 text-sm text-zinc-600'>({category})</small>
                </h1>
                <div className='flex items-center w-[80%]'>
                    <Topnav />
                    <Dropdown 
                        title="Category" 
                        options={["on_the_air", "top_rated", "popular", "airing_today"]} 
                        func={(e) => setCategory(e.target.value)}
                    />
                    <div className='w-[2%]'></div>
                </div> 
            </div>

            <InfiniteScroll
                loader={<h1>Loading...</h1>}
                dataLength={tv.length}
                next={getTv}
                hasMore={hasMore}
            >
                <Cards data={tv} title="tv" />
            </InfiniteScroll>
            

        </div>
    ) : <Loading />;
};

export default Tvshows;
