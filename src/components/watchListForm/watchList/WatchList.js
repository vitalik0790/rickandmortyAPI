import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import s from './WatchList.module.css'
import s1 from './watchListItem/WatchListItem.module.css';

const WatchList = ({
    episodes,
    deleteEpisode,
}) => {
    const [checked, setChecked] = useState(false);

    const onHandleChange = (item, event) => {
        item.status = event.target.checked;
        const index = episodes.findIndex(p => p.id === item.id);
        episodes[index] = item;
        localStorage.setItem('episodes', JSON.stringify(episodes));
    }
    useEffect(() => { }, [episodes])
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
                            appearActive: s["appear-active"],
                            appearDone: s["appear"],
                            exitDone: s["exit"],
                            exitActive: s["exit-active"],
                        }}
                    >
                        <div className={s1.container}>
                            <div className={s1.checkbox}>
                                <input className={s1.customCheckbox} type="checkbox" id="complete" name="complete" defaultChecked={item.status} onChange={(e) => onHandleChange(item, e)} />
                                <label htmlFor="complete">Completed</label>
                            </div>
                            <div>
                                <h3 className={s1.listItemName}>{item.name} </h3>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className={s1.listItemBtn}
                                    data-id={item.id}
                                    onClick={deleteEpisode}
                                >
                                    <svg
                                        className={s1.listItemIcon}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="25px"
                                        height="25px"
                                    >
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
}

export default WatchList;