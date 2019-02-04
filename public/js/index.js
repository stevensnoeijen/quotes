new Vue({
    el: '#main',
    data: {
      quote: 'loading quote...'
    },
    mounted () {
      axios
        .get('http://quotes.stormconsultancy.co.uk/random.json')
        .then(response => (this.quote = response.data.quote))
    }
})
