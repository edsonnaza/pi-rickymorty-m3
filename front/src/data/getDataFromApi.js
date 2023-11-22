const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character/')
        .catch(() => {
            return fetch(
                'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
            );
        })
        .then((response) => response.json())
        .then((data) => {
            return data.results
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((character) => {
                    return {
                        id: character.id,
                        image: character.image,
                        name: character.name,
                        species: character.species,
                        origin: character.origin,
                        status: character.status,
                        episodes: character.episode,
                    };
                });
        });
};

export default getDataFromApi;