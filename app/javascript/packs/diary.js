
import Vue from 'vue/dist/vue.esm'
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
const vm = new Vue({
    el: '#app',
    data() {
      return {
        section: "1",
        isActive: true,
        results:[],
        url :'http://localhost:8000/api1/diaryes/',
        url1:"http://localhost:8000/api/entries/",
        url2:"/?format=json",
      }
    },
    methods: {
      active: function () {
          this.isActive = !this.isActive;
        //   this.url = this.url1 + this.section + this.url2;
          axios.get(this.url)
          .then(response => {this.results = response.data.results})

      },
      search: function() {
       console.log('search')
      },
      postDiary: function(){

        axios.post('http://localhost:8000/api1/diaryes/', {
          body: "axios最高",
      })
        .then(function (response) {
          console.log(response.data);
        })



      }
  },
    mounted() {
      axios.get(this.url)
      .then(response => {this.results = response.data.results})


    },
  })

})
