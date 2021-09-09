import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import WatchListItem from './watchListItem/WatchListItem'


const WatchList = ({
    episodes,
    deleteEpisode,
    getEpisodeById
}) => {
    return (
        <div>
            <TransitionGroup component="ul" className="list">
                {episodes.map(item => (
                    <CSSTransition key={item.id} timeout={250} classNames="list-item">
                        <WatchListItem
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