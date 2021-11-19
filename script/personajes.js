import {data} from '../script/data.js';
let items = document.getElementById("items");

items.innerHTML = '';
data.forEach(movie => {
    const {nombre,imagen} = movie;
    items.innerHTML += `
    <div>
        <img src=${imagen}>
        <li>${nombre}</li>
    </div>
    

    `
})