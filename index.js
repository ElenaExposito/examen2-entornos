// Usamos import en lugar de require debido a la versión de node-fetch
import fetch from "node-fetch";

// Definir la URL de la API de PokeAPI para Pikachu
const pokemonName = "pikachu"; // Puedes cambiar este nombre a cualquier Pokémon
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

async function getPokemonData() {
  try {
    // Hacer la solicitud a la API
    const response = await fetch(url);

    // Si la respuesta es correcta, procesarla
    if (response.ok) {
      const data = await response.json();

      // Mostrar algunos datos del Pokémon
      console.log(`Nombre: ${data.name}`);
      console.log(`ID: ${data.id}`);
      console.log(`Altura: ${data.height} decímetros`);
      console.log(`Peso: ${data.weight} hectogramos`);
      console.log(
        `Tipos: ${data.types.map((type) => type.type.name).join(", ")}`
      );
      console.log(
        `Habilidades: ${data.abilities
          .map((ability) => ability.ability.name)
          .join(", ")}`
      );
      console.log(`Imagen: ${data.sprites.front_default}`);
    } else {
      console.log("Error al obtener los datos del Pokémon");
    }
  } catch (error) {
    console.log("Error al llamar a la API:", error);
  }
}

// Llamar a la función
getPokemonData();
