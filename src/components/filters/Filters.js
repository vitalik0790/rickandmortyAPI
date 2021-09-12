import React from 'react';
import s from './Filters.module.css';


const Filters = (props) => {

    return (
        <div className={s.filter}>
            <form>
                <fieldset className={s.fildset}>
                    <div className={s.container}>
                        <label htmlFor="species">Species: </label>
                        <select
                            className={s.fieldset}
                            name="species"
                            id="species"
                            onChange={props.onHandleChange}
                        >
                            <option value="all">All</option>
                            <option value="human">Human</option>
                            <option value="alien">Alien</option>
                            <option value="humanoid">Humanoid</option>
                            <option value="poopybutthole">Poopybutthole</option>
                            <option value="mythological creature">Mythological creature</option>
                            <option value="cronenberg">Cronenberg</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </div>

                    <div className={s.container}>
                        <label htmlFor="gender">Gender: </label>
                        <select
                            className={s.fieldset}
                            name="gender"
                            id="gender"
                            onChange={props.onHandleChange}
                        >
                            <option value="all">All</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="genderless">Genderless</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </div>

                    <div className={s.container}>
                        <label htmlFor="status">Status: </label>
                        <select
                            className={s.fieldset}
                            name="status"
                            id="status"
                            onChange={props.onHandleChange}
                        >
                            <option value="all">All</option>
                            <option value="alive">Alive</option>
                            <option value="dead">Dead</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default Filters;