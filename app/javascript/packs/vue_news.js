
import Vue from 'vue/dist/vue.esm'
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
const vm = new Vue({
    el: '#app',
    data: {
      results: []
    },
    mounted() {
      axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=PXryzF2iNpyTiwECgLWBDmSEoUNGk7Xg")
      .then(response => {this.results = response.data.results})
    }
  })

})
