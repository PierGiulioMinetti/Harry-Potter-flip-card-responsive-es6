const url = "http://hp-api.herokuapp.com/api/characters";

let data = [];

//REFERENCES
const ulContainer = document.querySelector('#ul-container')
const searchbar = document.querySelector('searchbar');
const form = document.querySelector('#form');
const searchedValue = document.querySelector('#searchedValue');
const btnSubmit = document.querySelector('#submit');

const li = document.querySelectorAll('li');

//EVENT LISTENER SEARCHBAR
searchedValue.addEventListener('keyup', (e) => {
    // console.log(e.target.value);
    const searchedWord = e.target.value.toLowerCase();

    //FILTER
    const filteredChar = data.filter((char) => {
        return (char.name.toLowerCase().includes(searchedWord) || char.house.toLowerCase().includes(searchedWord))
    })

    console.log(filteredChar);
    renderHtml(filteredChar)
});



//FETCH DATA
async function getData() {
    try {
        const response = await fetch(url);
        data = await response.json();
    } catch (error) {
        console.log('Something went wrong! Error: ' + error);
    }

    // console.log(data);
    renderHtml(data);
    return data;
}


getData();


//OUTPUT DATA
function renderHtml(arr) {
    const content = arr.map((character) => {
        if (character.image != '' && character.house == 'Gryffindor') {

            return `
            <li class="red">
                <div class="container">
                    <div class="card ">
                        <div class="front">
                            <h2>${character.name}</h2>
                            <p>House: ${character.house}</p>
                            <img src="${character.image}" />
                        </div>
                        <div class="back red-flip p-top big">
                            <p>Name: ${character.name}</p>
                            <p>Ancestry: ${character.ancestry}</p>
                            <p>Date of birth: ${character.dateOfBirth}</p> 
                            <p>Patronus: ${character.patronus}</p>
                        </div>
                    </div>
                </div>
            </li>
            `
        } else if (character.image != '' && character.house == 'Slytherin') {

            return `
            <li class="green">
                <div class="container">
                    <div class="card ">
                        <div class="front">
                            <h2>${character.name}</h2>
                            <p>House: ${character.house}</p>
                            <img src="${character.image}" />
                        </div>
                        <div class="back green-flip p-top big">
                            <p>Name: ${character.name}</p>
                            <p>Ancestry: ${character.ancestry}</p>
                            <p>Date of birth: ${character.dateOfBirth}</p> 
                            <p>Patronus: ${character.patronus}</p>
                        </div>
                    </div>
                </div>
            </li>
            `
        } else if (character.image != '' && character.house == 'Hufflepuff') {

            return `
            <li class="blue">
                <div class="container">
                    <div class="card ">
                        <div class="front">
                            <h2>${character.name}</h2>
                            <p>House: ${character.house}</p>
                            <img src="${character.image}" />
                        </div>
                        <div class="back blue-flip p-top big">
                            <p>Name: ${character.name}</p>
                            <p>Ancestry: ${character.ancestry}</p>
                            <p>Date of birth: ${character.dateOfBirth}</p> 
                            <p>Patronus: ${character.patronus}</p>
                        </div>
                    </div>
                </div>
            </li>
                   `
        } else if (character.image != '' && character.house == 'Ravenclaw') {

            return `
            <li class="blue">
                <div class="container">
                    <div class="card ">
                        <div class="front">
                            <h2>${character.name}</h2>
                            <p>House: ${character.house}</p>
                            <img src="${character.image}" />
                        </div>
                        <div class="back blue-flip p-top big">
                            <p>Name: ${character.name}</p>
                            <p>Ancestry: ${character.ancestry}</p>
                            <p>Date of birth: ${character.dateOfBirth}</p> 
                            <p>Patronus: ${character.patronus}</p>
                        </div>
                    </div>
                </div>
            </li>
            
            `
        }



    }).join('');

    ulContainer.innerHTML = content;

}
