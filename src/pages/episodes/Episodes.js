import React from 'react'
import { useState, useEffect } from 'react';
import StatusError from '../../components/statusError/StatusError';
import Pagination from '../../UI/pagination/Pagination';
import Table from '../../components/tables/TableForEpisodes';

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');
    const [info, setInfo] = useState({});

    const initialUrl = "https://rickandmortyapi.com/api/episode";

    const fetchEpisodes = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setEpisodes(data.results);
                setStatus('resolved');
                setInfo(data.info);
            })
            .catch(error => {
                setError(error);
                setStatus('rejected');
            });
    };

    const sortData = (field) => {
        const copyData = episodes.concat();
        const sortData = copyData.sort(
            (a, b) => { return a[field] > b[field] ? 1 : -1 }
        );
        setEpisodes(sortData);
    };

    const onPrev = () => {
        fetchEpisodes(info.prev);
    };
    const onNext = () => {
        fetchEpisodes(info.next);
    };

    useEffect(() => {
        fetchEpisodes(initialUrl);
    }, []);

    return (
        <div>
            <Pagination
                prev={info.prev}
                next={info.next}
                onPrev={onPrev}
                onNext={onNext}
            />

            {status === 'rejected' && (
                <StatusError message={error.message} style={{ textAlign: 'center' }} />
            )}
            <Table data={episodes} sortData={sortData} />
            <Pagination
                prev={info.prev}
                next={info.next}
                onPrev={onPrev}
                onNext={onNext}
            />
        </div>
    )
};

export default Episodes;
