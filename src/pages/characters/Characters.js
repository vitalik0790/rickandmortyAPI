import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import * as charactersAPI from '../../service/Service';
import StatusError from '../../components/statusError/StatusError';
import Pagination from '../../components/pagination/Pagination'
import s from '../characters/Characters.module.css'

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');
    const [info, setInfo] = useState([]);

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

            {status === 'resolved' && (
                <>
                    <ul className={s.ItemList}>
                        {characters.map(
                            ({ id, name, image, }) => (
                                <li className={s.ImageGalleryItem} key={id}>
                                    <img className={s.ImageGalleryItemImage} src={image} alt={name} />
                                    <div className={s.about}>
                                        <p className={s.text}>{name}</p>
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