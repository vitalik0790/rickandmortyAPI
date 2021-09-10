import { useState, useEffect } from 'react';
import StatusError from '../../components/statusError/StatusError';
import Pagination from '../../UI/pagination/Pagination';
import Filters from '../../components/filters/Filters'
import s from '../characters/Characters.module.css';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');
    const [info, setInfo] = useState({});
    const [ch_filters, setChFilters] = useState({});
    const initialUrl = "https://rickandmortyapi.com/api/character";

    const fetchCharacters = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results);
                setStatus('resolved');
                setInfo(data.info);
            })
            .catch(error => {
                setError(error);
                setStatus('rejected');
            });
    };

    const onPrev = () => {
        fetchCharacters(info.prev);
    };
    const onNext = () => {
        fetchCharacters(info.next);
    };

    useEffect(() => {
        fetchCharacters(initialUrl);
    }, []);
    console.log("out of useEffect", ch_filters);
    useEffect(() => {
        console.log("Ch_filter", ch_filters);
        let filter_url = initialUrl + "/?";
        for (var key in ch_filters) {
            filter_url += key + "=" + ch_filters[key] + "&";
        }
        filter_url = filter_url.substring(0, filter_url.length - 1);
        fetchCharacters(filter_url);
    }, [ch_filters])
    return (
        <div>
            <Filters ch_filters={ch_filters} onChange={setChFilters} />
            <Pagination
                prev={info.prev}
                next={info.next}
                onPrev={onPrev}
                onNext={onNext}
            />
            {status === 'rejected' && (
                <StatusError message={error.message} style={{ textAlign: 'center' }} />
            )}

            {status === 'resolved' && (
                <>
                    <ul className={s.ItemList}>
                        {characters.map(
                            ({ id, name, image, species, status, gender }) => (
                                <li className={s.ImageGalleryItem} key={id}>
                                    <img className={s.ImageGalleryItemImage} src={image} alt={name} />
                                    <div className={s.about}>
                                        <p className={s.text}>{name}</p>
                                        <hr />
                                        <p className={s.info}>Species: {species}</p>
                                        <p className={s.info}>Gender: {gender}</p>
                                        <p className={s.info}>Status: {status}</p>
                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                    <Pagination
                        prev={info.prev}
                        next={info.next}
                        onPrev={onPrev}
                        onNext={onNext}
                    />
                </>
            )}

        </div>
    );
}

export default Characters;