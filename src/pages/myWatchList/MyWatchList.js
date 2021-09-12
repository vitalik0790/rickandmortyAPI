import React from 'react';
import { useState, useEffect } from 'react';
import WatchList from '../../components/watchListForm/watchList/WatchList';
import FilterEpisodes from '../../components/filterEpisodes/FilterEpisodes';
import Notifications from '../../components/notifications/Notifications'
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from "react-transition-group";
import s from './MyWatchList.module.css'
import s1 from '../../components/watchListForm/WatchListForm.module.css'
const MyWatchList = () => {
    const [filter, setFilter] = useState("");
    const [episodes, setEpisodes] = useState([]);
    const [showNotice, setShowNotice] = useState(false);
    const [noticeMessage, setNoticeMessage] = useState('');
    const [episode, setEpisode] = useState("");
    useEffect(() => {
        if (localStorage.getItem('episodes')) {
            const episodesFromLS = JSON.parse(localStorage.getItem('episodes'));
            episodesFromLS.length && setEpisodes([...episodesFromLS]);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('episodes', JSON.stringify(episodes));
    }, [episodes])

    const showNoticeMessage = message => {
        setNoticeMessage(message);
        setShowNotice(true);
        setTimeout(() => {
            setShowNotice(false);
        }, 3000);
    };

    const addEpisode = (episode) => {
        if (episodes.some(item => item.name === episode.name)) {
            showNoticeMessage(`${episode.name} is already exist in your list`);
            return;
        }

        if (!episode.name.length) {
            showNoticeMessage('Please enter an episode name');
            return;
        }

        setEpisodes(prevState => [...prevState, episode]);
    }
    const deleteEpisode = (e) => {
        const id = e.currentTarget.dataset.id;
        setEpisodes(prevState => [...prevState.filter(item => item.id !== id)]);
    };

    const getFilteredEpisodes = () => {
        return episodes.filter(episode =>
            episode.name.toLowerCase().includes(filter.toLowerCase()),
        );
    };

    const handleFilterInputChange = e => {
        setFilter(e.target.value);
    };

    const onHandelSubmit = e => {
        e.preventDefault();
        addEpisode({
            id: uuidv4(),
            name: episode,
            status: false
        });
        setEpisode("");
    };


    return (
        <div className={s.main}>
            <CSSTransition
                in={showNotice}
                timeout={250}
                classNames={s.myNotice}
                unmountOnExit
            >
                <Notifications message={noticeMessage} />
            </CSSTransition>

            <CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames={s.title}
                unmountOnExit
            >
                <h1 className={s.watchListTitle}>My watch list</h1>
            </CSSTransition>

            <CSSTransition
                in={true}
                appear={true}
                timeout={400}
                classNames="form"
                unmountOnExit
            >
                <form className={s1.form} onSubmit={onHandelSubmit}>
                    <label className={s1.formFild}>
                        <span className={s1.formText}>Episode: </span>
                        <input
                            className={s1.formInput}
                            placeholder="Enter episode..."
                            type="text"
                            name="name"
                            value={episode}
                            onChange={(e) => setEpisode(e.target.value)}
                        ></input>
                    </label>

                    <button className={s1.formBtn} type="submit">
                        Add episode
                    </button>
                </form>
            </CSSTransition>

            <CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames="contactsTitle"
                unmountOnExit
            >
                <>
                    <h2 className={s.episodesTitle}>Episodes</h2>
                    {episodes.length >= 2 && (
                        <CSSTransition
                            in={true}
                            appear={true}
                            timeout={500}
                            classNames={s.filter}
                            unmountOnExit
                        >
                            <FilterEpisodes onChange={handleFilterInputChange} filter={filter} />
                        </CSSTransition>
                    )}
                </>
            </CSSTransition>

            {episodes.length > 0 && (
                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={550}
                    classNames={s.episodesList}
                    unmountOnExit
                >
                    <WatchList
                        episodes={getFilteredEpisodes()}
                        filter={filter}
                        deleteEpisode={deleteEpisode}
                    />
                </CSSTransition>
            )}

            {episodes.length === 0 && (
                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={550}
                    classNames="contactsText"
                    unmountOnExit
                >
                    <p className={s.contactsText}>
                        Your whatch list is empty. Please add an episode.
                    </p>
                </CSSTransition>
            )}
        </div>
    );
}

export default MyWatchList;

