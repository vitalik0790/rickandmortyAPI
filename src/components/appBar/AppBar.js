import Navigation from '../navigation/Navigation';
import s from '../appBar/AppBar.module.css';

export default function AppBar() {
    return (
        <header className={s.header}>
            <Navigation />
        </header>
    );
}