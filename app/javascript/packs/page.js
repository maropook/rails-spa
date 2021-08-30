
import Vue from 'vue/dist/vue.esm'
import axios from 'axios';
import Paginate from 'vuejs-paginate'

Vue.component('paginate', Paginate)

document.addEventListener('DOMContentLoaded', () => {

new Vue({
   el: '#app',
   data(){

  const items = new Array(200).fill(null).map((e, i) => `Item ${i + 1}`);
   return{
     items,
     parPage: 10,
     currentPage: 1}
   },
   methods: {
    clickCallback: function (pageNum) {
       this.currentPage = Number(pageNum);
    }
   },
   computed: {
     getItems: function() {
       let current = this.currentPage * this.parPage;
       let start = current - this.parPage;
       return this.items.slice(start, current);
     },
     getPageCount: function() {
       return Math.ceil(this.items.length / this.parPage);
     }
   }
 })
})
