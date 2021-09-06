import React from 'react';
import imagePath from '../assets/rik-i-morti-rick-and-morty-5937.jpg';
import { Link } from 'react-router-dom'

const styles = {
    container: { textAlign: 'center' },
    status: { fontSize: 96, marginBottom: 16 },
    link: { textDecoration: 'none', color: '#ff6b08' },
};

function NotFound() {
    return (
        <div style={styles.container}>
            <h1 style={styles.status}>404</h1>
            <img src={imagePath} alt="rick and morty" width="460" />
            <p>Oops, you seem to be lost. Here is the link to the <Link style={styles.link} to="/">home page</Link>.</p>
        </div >
    );
}

export default NotFound;