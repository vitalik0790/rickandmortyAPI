import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './WatchListForm.module.css'


const initialState = {
    name: '',
}

const WatchListForm = ({ addEpisode }) => {
    const [state, setState] = useState({ ...initialState });

    const onHandelChange = e => {
        const name = e.target.name;
        setState(prevState => ({ ...prevState, [name]: e.target.value }));
    };

    const onHandelSubmit = e => {
        e.preventDefault();
        const episode = {
            id: uuidv4(),
            name: state.name,
        };

        addEpisode(episode);
        if (state.name) {
            setState({ ...initialState });
        }
    };

    return (
        <form className={s.form} onSubmit={onHandelSubmit}>
            <label className={s.formFild}>
                <span className={s.formText}>Episode: </span>
                <input
                    className={s.formInput}
                    placeholder="Enter episode..."
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={onHandelChange}
                ></input>
            </label>

            <button className={s.formBtn} type="submit">
                Add episode
            </button>
        </form>
    );
}

export default WatchListForm;