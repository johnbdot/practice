/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

const pets = [
  {
    name: 'Mylo',
    type: 'Dog',
    breed: 'Aussie',
    age: 1,
    photo: 'img/aussie.jpg',
    alt: 'Austrailian Shepherd'
  },
  {
    name: 'Ben',
    type: 'Dog',
    breed: 'Dachshund',
    age: 3,
    photo: 'img/dachshund.jpg'
  },
  {
    name: 'Bob',
    type: 'Dog',
    breed: 'Golden',
    age: 5,
    photo: 'img/golden.jpg'
  },
  {
    name: 'Tom',
    type: 'Cat',
    breed: 'Persian',
    age: 2,
    photo: 'img/persian.jpg'
  },
  {
    name: 'Kevin',
    type: 'Cat',
    breed: 'Tabby',
    age: 4,
    photo: 'img/tabby.jpg'
  }
]

function createListItems(arr) {
  let items = '';
  for (let pet in arr) {
    items += `
    <h2>${arr[pet].name}</h2>
    <h3>${arr[pet].type} | ${arr[pet].breed}</h3>
    <p>Age: ${arr[pet].age}</p>
    <img src="${arr[pet].photo}" alt="${arr[pet].alt}">
    `;
  }
  return items;
}

document.querySelector('main').innerHTML = createListItems(pets);