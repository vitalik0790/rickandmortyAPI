import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import * as charactersAPI from '../../service/Service';
import StatusError from '../../components/statusError/StatusError';
import s from '../characters/Characters.module.css'

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');


    useEffect(() => {
        setStatus('pending');

        charactersAPI.fetchCharactersHomePage()
            .then(charaters => {
                setCharacters(charaters);
                setStatus('resolved');
            })
            .catch(error => {
                setError(error);
                setStatus('rejected');
            });
    }, []);

    return (
        <div>
            {status === 'rejected' && (
                <StatusError message={error.message} style={{ textAlign: 'center' }} />
            )}

            {status === 'resolved' && (
                <>
                    <ul className={s.ItemList}>
                        {characters.results.map(
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
                </>
            )}

        </div>
    );
}

export default Characters;