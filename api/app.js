function userDetails(email, callback) {
    setTimeout(() => {
        console.log('Data found.')
        callback({ firstName: 'John', lastName: 'Bouakhasith' })
    }, 3000)
}

userDetails('john@gmail.com', LASTNAME => {
    console.log(LASTNAME.lastName)
})