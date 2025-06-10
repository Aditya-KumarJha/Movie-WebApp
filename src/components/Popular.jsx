import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import Cards from './partials/Cards';
import Loading from './Loading';

const Popular = () => {

    const navigate = useNavigate();

    const [category, setCategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getPopular = async () => {
        try {
            const {data} = await axios.get(`${category}/popular?page=${page}`);
            if(data.results.length > 0) {
                setPopular((prevState) => [...prevState, ...data.results]);
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
        if(popular.length === 0) {
            getPopular();
        }
        else {
            setPage(1);
            setPopular([]);
            getPopular();
        }
    }

    useEffect(() => {
        refreshHandler();
        document.title = "MOVIE | POPULAR " + category.toUpperCase();
    },[category]);

    return popular.length > 0 ? (
        <div className='w-screen h-screen'>

            <div className='px-[5%] w-full flex items-center justify-between'>
                <h1 className='text-2xl font-semibold text-zinc-400'>
                    <i 
                        onClick={() => navigate(-1)} 
                        className="hover:text-[#6556CD] ri-arrow-left-line">
                    </i>
                    Popular
                </h1>
                <div className='flex items-center w-[80%]'>
                    <Topnav />
                    <Dropdown 
                        title="Category" 
                        options={["movie", "tv"]} 
                        func={(e) => setCategory(e.target.value)}
                    />
                    <div className='w-[2%]'></div>
                </div> 
            </div>

            <InfiniteScroll
                loader={<h1>Loading...</h1>}
                dataLength={popular.length}
                next={getPopular}
                hasMore={hasMore}
            >
                <Cards data={popular} title={category} />
            </InfiniteScroll>
            

        </div>
    ) : <Loading />;
};

export default Popular;
