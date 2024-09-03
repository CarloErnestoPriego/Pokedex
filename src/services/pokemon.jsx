export const reqPokemon = async (nombre) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}/`);
        const data = await resp.json();

        
        const pokemon = {
            id: data.id, 
            nombre: data.name, 
            image: data.sprites.other['official-artwork'].front_default,
            tipo: data.types,
            peso: data.weight
        };

        console.log(pokemon); 

        return pokemon; 

    } catch (err) {
        console.error(err); 
        throw err; 
    }
};