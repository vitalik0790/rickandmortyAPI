import React from 'react'
import s from './Pagination.module.css'

const Pagination = ({ prev, next, onPrev, onNext }) => {

    const handlePrev = () => {
        onPrev();
    };

    const handleNext = () => {
        onNext();
    };

    return (
        <nav>
            <ul className={s.list}>
                {prev ? (
                    <li className={s.item}>
                        <button className={s.btn} onClick={handlePrev}>
                            Prev
                        </button>
                    </li>
                ) : null}
                {next ? (
                    <li className={s.item}>
                        <button className={s.btn} onClick={handleNext}>
                            Next
                        </button>
                    </li>
                ) : null}
            </ul>
        </nav >
    )
}

export default Pagination;
