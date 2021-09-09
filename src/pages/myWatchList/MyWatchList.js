import React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from "react-transition-group";
import s from './MyWatchList.module.css'

const MyWatchList = () => {
    const [episodes, setEpisodes] = useState([]);
    const [filter, setFilter] = useState("");
    const [newEpisode, setNewEpisode] = useState(null);
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
                in={true}
                appear={true}
                timeout={500}
                classNames={s}
            >
                <h1 className={s.title}>My watch list</h1>
            </CSSTransition>
        </div>
    );
}

export default MyWatchList;

