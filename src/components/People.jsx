import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './partials/Topnav';
import Cards from './partials/Cards';
import Loading from './Loading';

const People = () => {

    const navigate = useNavigate();

    const [category, setCategory] = useState("popular");
    const [person, setPerson] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getPerson = async () => {
        try {
            const {data} = await axios.get(`/person/${category}?page=${page}`);
            if(data.results.length > 0) {
                setPerson((prevState) => [...prevState, ...data.results]);
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
        if(person.length === 0) {
            getPerson();
        }
        else {
            setPage(1);
            setPerson([]);
            getPerson();
        }
    }

    useEffect(() => {
        refreshHandler();
        document.title = "MOVIE | PEOPLE ";
    },[category]);

    return person.length > 0 ? (
        <div className='w-screen h-screen'>

            <div className='px-[5%] w-full flex items-center justify-between'>
                <h1 className='text-2xl font-semibold text-zinc-400'>
                    <i 
                        onClick={() => navigate(-1)} 
                        className="hover:text-[#6556CD] ri-arrow-left-line">
                    </i>
                    PEOPLE
                </h1>
                <div className='flex items-center w-[80%]'>
                    <Topnav />
                    <div className='w-[2%]'></div>
                </div> 
            </div>

            <InfiniteScroll
                loader={<h1>Loading...</h1>}
                dataLength={person.length}
                next={getPerson}
                hasMore={hasMore}
            >
                <Cards data={person} title="person" />
            </InfiniteScroll>
            

        </div>
    ) : <Loading />;
};

export default People;
