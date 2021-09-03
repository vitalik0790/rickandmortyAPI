import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav>
            <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
                Characters
            </NavLink>
            <NavLink to="/episodes" className={s.link} activeClassName={s.activeLink}>
                Episodes
            </NavLink>
            <NavLink to="/locations" className={s.link} activeClassName={s.activeLink}>
                Locations
            </NavLink>
            <NavLink to="/my_watch_list" className={s.link} activeClassName={s.activeLink}>
                My watch list
            </NavLink>
        </nav>
    );
}