import React from 'react';
import s from './FilterEpisodes.module.css';

const FilterEpisodes = ({ onChange, filter }) => {
    return (
        <div className={s.container}>
            <input
                className={s.filterInput}
                placeholder="Find by episode..."
                type="text"
                name="filter"
                value={filter}
                onChange={onChange}
            />
        </div>
    );
}

export default FilterEpisodes;