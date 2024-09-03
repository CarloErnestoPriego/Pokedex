export const ContenedorPokemon = ({ pokemon }) => {
    return (
        <div className="d-flex flex-row justify-content-center align-items-center">
            <div className="text-center m-3 pokemon-container">
                <div className="card" style={{ width: '18rem' }}>
                    <img className="w-100" src={pokemon.image} alt={pokemon.nombre} style={{ width: '100%' }} />
                    <div className="card-body">
                        <h1>Nombre: {pokemon.nombre}</h1>
                        <h1>PokeId: {pokemon.id}</h1>
                        <h1> Tipos: {Object.keys(pokemon).length !== 0 && pokemon.tipo.map(({type, slot}) => (
                            <li key={slot}>{type.name}</li>
                        ))}</h1>
                        <h1>Peso: {pokemon.peso/10} kg</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};