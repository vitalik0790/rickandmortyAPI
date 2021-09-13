import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import StatusError from '../../components/statusError/StatusError';
import Pagination from '../../UI/pagination/Pagination';
import Modal from '../../UI/modal/Modal'
import Filters from '../../components/filters/Filters'
import s from '../characters/Characters.module.css';
import s1 from '../../UI/modal/Modal.module.css'


const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');
    const [info, setInfo] = useState({});
    const [isCharacterInfoOpen, setCharacterInfoOpen] = useState(false);
    const [character, setCharacter] = useState({});
    const [ch_filters, setChFilters] = useState({});
    const initialUrl = "https://rickandmortyapi.com/api/character";

    const onHandleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setChFilters({ ...ch_filters, [name]: value })
    };

    const getCharacterById = id => {
        const characterById = characters.find(character => character.id === id);
        setCharacter({ ...characterById });
    };

    const openCharacterInfo = e => {
        setCharacterInfoOpen(true);
        const id = e.currentTarget.dataset.id;
        console.log(id)

        getCharacterById(id);
    };

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

    useEffect(() => {
        let filter_url = initialUrl + "/?";
        for (const key in ch_filters) {
            if (ch_filters[key].localeCompare('all'))
                filter_url += "&" + key + "=" + ch_filters[key] + "&";
        }
        filter_url = filter_url.substring(0, filter_url.length - 1);
        fetchCharacters(filter_url);
    }, [ch_filters])


    return (
        <div>
            <Filters ch_filters={ch_filters} onChange={setChFilters} onHandleChange={onHandleChange} />
            <Pagination
                prev={info !== undefined ? info.prev : ""}
                next={info !== undefined ? info.next : ""}
                onPrev={onPrev}
                onNext={onNext}
            />
            {status === 'rejected' && (
                <StatusError message={error.message} style={{ textAlign: 'center' }} />
            )}

            {status === 'resolved' && (
                <>
                    <ul className={s.ItemList}>
                        {characters !== undefined ? characters.map(
                            ({ id, name, image, species, status, gender }) => (
                                <li className={s.ImageGalleryItem} key={id} onClick={openCharacterInfo}>
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
                        ) : ""}
                    </ul>
                    <Pagination
                        prev={info !== undefined ? info.prev : ""}
                        next={info !== undefined ? info.next : ""}
                        onPrev={onPrev}
                        onNext={onNext}
                    />
                </>
            )}
            <CSSTransition
                in={isCharacterInfoOpen}
                appear={true}
                timeout={300}
                classNames={{
                    enterActive: s1["enter-active"],
                    enterDone: s1["enter"],
                    exitDone: s1["exit"],
                    exitActive: s1["exit-active"],
                }}
                unmountOnExit
            >
                <Modal
                    action={setCharacterInfoOpen}
                    character={character}
                />
            </CSSTransition>
        </div>
    );
}

export default Characters;