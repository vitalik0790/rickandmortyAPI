import React from 'react'
import { useState, useEffect } from 'react';
import StatusError from '../../components/statusError/StatusError';
import Pagination from '../../UI/pagination/Pagination';
import Table from '../../components/tables/TableForLocations';

function Locations() {
    const [locations, setLocations] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');
    const [info, setInfo] = useState({});

    const initialUrl = "https://rickandmortyapi.com/api/location";

    const fetchLocations = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setLocations(data.results);
                setStatus('resolved');
                setInfo(data.info);
            })
            .catch(error => {
                setError(error);
                setStatus('rejected');
            });
    };

    const sortData = (field) => {
        const copyData = locations.concat();
        const sortData = copyData.sort(
            (a, b) => { return a[field] > b[field] ? 1 : -1 }
        );
        setLocations(sortData);
    };

    const onPrev = () => {
        fetchLocations(info.prev);
    };
    const onNext = () => {
        fetchLocations(info.next);
    };

    useEffect(() => {
        fetchLocations(initialUrl);
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
            <Table data={locations} sortData={sortData} />
            <Pagination
                prev={info.prev}
                next={info.next}
                onPrev={onPrev}
                onNext={onNext}
            />
        </div>
    )
}

export default Locations;