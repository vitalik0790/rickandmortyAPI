import React from 'react';
import { useState, useEffect } from 'react';
import WatchListForm from '../../components/watchListForm/WatchListForm';
import WatchList from '../../components/watchListForm/watchList/WatchList';
import FilterEpisodes from '../../components/filterEpisodes/FilterEpisodes';
import Notifications from '../../components/notifications/Notifications'

import { CSSTransition } from "react-transition-group";
import s from './MyWatchList.module.css'

const MyWatchList = () => {
    const [filter, setFilter] = useState("");
    const [episodes, setEpisodes] = useState([]);
    const [showNotice, setShowNotice] = useState(false);
    const [noticeMessage, setNoticeMessage] = useState('');

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

    const getEpisodeById = id => {
        const episodeById = episodes.find(episode => episode.id === id);
        setEpisodes({ ...episodeById });
    };

    return (
        <div>
            <CSSTransition
                in={showNotice}
                timeout={250}
                classNames="my-notice"
                unmountOnExit
            >
                <Notifications message={noticeMessage} />
            </CSSTransition>

            <CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames={s}
                unmountOnExit
            >
                <h1 className={s.title}>My watch list</h1>
            </CSSTransition>

            <CSSTransition
                in={true}
                appear={true}
                timeout={400}
                classNames="form"
                unmountOnExit
            >
                <WatchListForm addEpisode={addEpisode} />
            </CSSTransition>

            <CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames="contactsTitle"
                unmountOnExit
            >
                <>
                    <h2 className="contacts_title">Episodes</h2>
                    {episodes.length >= 2 && (
                        <CSSTransition
                            in={true}
                            appear={true}
                            timeout={500}
                            classNames="filter"
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
                    classNames="contactsList"
                    unmountOnExit
                >
                    <WatchList
                        episodes={getFilteredEpisodes()}
                        filter={filter}
                        deleteEpisode={deleteEpisode}
                        getEpisodeById={getEpisodeById}
                    />
                </CSSTransition>
            )}
        </div>
    );
}

export default MyWatchList;

