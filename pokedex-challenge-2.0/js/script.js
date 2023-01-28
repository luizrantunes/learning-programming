const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');
const pokemonType1 = document.querySelector('.pokemon__type1');
const pokemonType2 = document.querySelector('.pokemon__type2');


const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200 ) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);
    
    if (data.id >= 1 && data.id <= 649) {
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonType1.innerHTML = data['types']['0']['type']['name'];
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value ='';
        searchPokemon = data.id;
    } else {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'not found :(';
        pokemonNumber.innerHTML = '';
        pokemonType1.innerHTML = '';
        pokemonType2.innerHTML = '';
        input.value ='';
    }
    /*if (otherType = true) {
        pokemonType2.innerHTML = data['types']['1']['type']['name'];
    }   else {
        pokemonType2.innerHTML = '';
    }*/
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
})

buttonPrev.addEventListener('click', () => {
    if(searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
})

buttonNext.addEventListener('click', () => {
    if(searchPokemon < 649) {
        searchPokemon += 1;
        renderPokemon(searchPokemon);
    }
})

renderPokemon(searchPokemon);