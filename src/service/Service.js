export function fetchCharactersHomePage() {
    return fetch('https://rickandmortyapi.com/api/character').then(
        response => {
            if (response.ok) {
                return response.json();
            }
        },
    );
};

export function fetchEpisodes() {
    return fetch('https://rickandmortyapi.com/api/episode').then(
        response => {
            if (response.ok) {
                return response.json();
            }
        },
    );
};

export function fetchLocations() {
    return fetch('https://rickandmortyapi.com/api/location').then(
        response => {
            if (response.ok) {
                return response.json();
            }
        },
    );
};