import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
        <form onSubmit={onHandelSubmit}>
            <label className="form_fild">
                <span className="form_text">Episode: </span>
                <input
                    className="form_input"
                    placeholder="Enter episode..."
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={onHandelChange}
                ></input>
            </label>

            <button className="form_btn" type="submit">
                Add episode
            </button>
        </form>
    );
}

export default WatchListForm;