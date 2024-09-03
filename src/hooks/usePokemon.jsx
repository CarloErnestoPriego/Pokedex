import { useState } from "react";
import { reqPokemon } from "../services/pokemon";

export const usePokemon = () => {
    const [pokemon, setPokemon] = useState({}); 
    const [nombre, setNombre] = useState(""); 

    const handleGetPokemon = async (e, nombre) => {
        e.preventDefault();

        try {
            const actualizarPokemon = await reqPokemon(nombre); 
            setPokemon(actualizarPokemon); 
            setNombre(nombre); 

        } catch (error) {
            console.error("Error no se actualizo el pokemon", error);
            
        }
    };

    return {
        handleGetPokemon,
        pokemon,
        nombre
    };
};