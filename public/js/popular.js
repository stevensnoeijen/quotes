new Vue({
    el: '#main',
    data: {
      quotes: []
    },
    mounted () {
      axios
        .get('http://quotes.stormconsultancy.co.uk/popular.json')
        .then(response => {
           this.quotes = response.data;
        })
    }
})
