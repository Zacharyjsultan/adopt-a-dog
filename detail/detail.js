import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');



// on load // get the id from URL
const params = new URLSearchParams(window.location.search);

// use the id to fetch the dog
async function loadData(){
    const data = await getDog(params.get('id'));
    const dogDiv = renderDogDetail(data);
    dogDetailContainer.append(dogDiv);
    
}
// render and append this dog's details to the container
loadData();