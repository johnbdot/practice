var request = new XMLHttpRequest()

request.open('GET', 'https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=uk&mkt=h2h&apiKey=463afb4b802cbf4c605e766af6a2498c', true)
request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach((odds) => {
            console.log(odds)
        })
    } else {
        console.log('error')
    }
}

request.send()