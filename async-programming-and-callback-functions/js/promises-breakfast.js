const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Oh no! There was a problem with your order.');
    }, 3000);
});

console.log(breakfastPromise);
breakfastPromise.then(val => console.log(val)).catch(err => console.log(err));