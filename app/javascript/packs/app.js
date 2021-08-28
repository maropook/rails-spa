
import Vue from 'vue/dist/vue.esm'
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
const vm = new Vue({
    el: '#app',
    data() {
      return {
        sections:["1","2","3","4","5","6"],
        section: "1",
        isActive: true,
        results: [],
        info:null,
        django:null,
        url :"http://localhost:8000/api/entries/1/?format=json",
        url1:"http://localhost:8000/api/entries/",
        url2:"/?format=json",
      }
    },
    methods: {
      active: function () {
          this.isActive = !this.isActive;
          this.url = this.url1 + this.section + this.url2;
          axios.get(this.url)
          .then(response => {this.django = response})

      },
      search: function() {
        this.url = this.url1 + this.section + this.url2;

      }
  },
    mounted() {
      axios.get(this.url)
      .then(response => {this.django = response})


    },
  })

})
