import { useState } from "react";

export const BuscarPokemon = ({ handleGetPokemon }) => {
    const [nombre, setNombre] = useState('');

    return (
        <>  
            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                <form className="d-flex" onSubmit={(e) => handleGetPokemon(e, nombre)}>
                    <input
                        className="me-2 form-control"
                        type="text"
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <input className="btn btn-primary" type="submit" value="buscar" />
                </form>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
            </div>
        </>
    );
};