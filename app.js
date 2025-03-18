import {LAW_VOCABULARY_OBJECT_ARRY} from './vocabulary.js';
const USER_SEARCH = document.getElementById('searchInput');
const SEARCH_RESULTS = document.getElementById('searchResults');
const saveForOffline = document.getElementById('saveForOffline');
const status = document.getElementById('status');
let LAW_VOCABULARY_ARRY = LAW_VOCABULARY_OBJECT_ARRY.map(item => `${item.word}: ${item.meaning}`);

const SEARCH = (event) => {
    SEARCH_RESULTS.innerHTML = '';

    // Filtered and sorted array based on input length
    const filteredResults = LAW_VOCABULARY_ARRY.filter(item => {
        const legalWord = item.trim().toLowerCase();
        const userInput = event.target.value.trim().toLowerCase();
        return legalWord.includes(userInput);
    }).sort((a, b) => a.length - b.length); // Sorting based on length

    // Render sorted results
    filteredResults.forEach(result => {
        SEARCH_RESULTS.innerHTML += `<li>${result}</li>`;
    });
    CLEAR_INTERFACE();
}

const CLEAR_INTERFACE = () =>{
    setTimeout(()=>{
        // IF USER CLEAR INPUT RESULTS WILL BE CLEAR
        if(USER_SEARCH.value.trim() == '') SEARCH_RESULTS.innerHTML = ''
    }, 1000)
}



USER_SEARCH.addEventListener('input',SEARCH)
USER_SEARCH.addEventListener('change', SEARCH)
