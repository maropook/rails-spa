
import Vue from 'vue/dist/vue.esm'
import axios from 'axios';



import Paginate from 'vuejs-paginate'

Vue.component('paginate', Paginate)



document.addEventListener('DOMContentLoaded', () => {
const vm =  new Vue({
  el: "#todo",
  data(){

    const items = new Array(200).fill(null).map((e, i) => `Item ${i + 1}`);
     return{
       items,
       parPage: 10,
       currentPage: 1,
      todos: [],
      formData: {
          text: null,
      },}
  },
  mounted: function () {
      this.readTodos();
  },
  methods: {
      readTodos: function () {
          let api_url = "http://localhost:8000/todo/todos/";
          axios
              .get(api_url)
              .then(response => {
                  this.todos = response.data.results;
              })
              .catch(err => {
                  console.log(err);
              });
      },
      createTodo: function () {
          axios
              .post("http://localhost:8000/todo/todos/", this.formData)
              .then(response => {
                this.formData= {
                    text: null,
                },
                  this.readTodos();
              })
              .catch(err => {
                  console.log(err);
              });
      },
      deleteTodo: function (id) {
          axios
              .delete(`http://localhost:8000/todo/todos/${id}/`)
              .then(response => {
                  this.readTodos();
              })
              .catch(err => {
                  console.log(err);
              });
      },
    clickCallback: function (pageNum) {
       this.currentPage = Number(pageNum);
    }
   },
   computed: {
     getItems: function() {
       let current = this.currentPage * this.parPage;
       let start = current - this.parPage;
       return this.todos.slice(start, current);
     },
     getPageCount: function() {
       return Math.ceil(this.todos.length / this.parPage);
     }
   }

});
})
