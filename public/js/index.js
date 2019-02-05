new Vue({
    el: '#main',
    data: {
      quote: null
    },
    mounted () {
      axios
        .get('http://quotes.stormconsultancy.co.uk/random.json')
        .then(response => {
          this.quote = response.data;
          twttr.widgets.createShareButton(
            '/',
            document.getElementById('share'),
            {
              count: 'none',
              text: response.data.quote
            });
        })
    }
})
