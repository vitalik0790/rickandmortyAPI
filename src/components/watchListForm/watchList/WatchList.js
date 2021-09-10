import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import WatchListItem from './watchListItem/WatchListItem';
import s from './WatchList.module.css'


const WatchList = ({
    episodes,
    deleteEpisode,
    getEpisodeById
}) => {
    const [checked, setChecked] = useState(false);

    const onHandleChange = () => {
        setChecked(!checked)
    }

    useEffect(() => {
        const getFromLS = JSON.parse(localStorage.getItem('checked'))
        setChecked(getFromLS);
    }, [])

    useEffect(() => {
        localStorage.setItem('checked', JSON.stringify(checked));
    }, [checked])

    return (
        <div className={s.container}>
            <TransitionGroup component="ul" className={s.list}>
                {episodes.map(item => (
                    <CSSTransition
                        key={item.id}
                        timeout={250}
                        classNames={{
                            enterActive: s["enter-active"],
                            enterDone: s["enter"],
                            exitDone: s["exit"],
                            exitActive: s["exit-active"],
                        }}
                    >
                        <WatchListItem
                            checked={checked}
                            onHandleChange={onHandleChange}
                            item={item}
                            deleteEpisode={deleteEpisode}
                            getEpisodeById={getEpisodeById}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
}

export default WatchList;