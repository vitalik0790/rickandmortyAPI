import React from 'react';
import { CSSTransition } from "react-transition-group";
import s from './MyWatchList.module.css'

function MyWatchList() {
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