
import Vue from 'vue/dist/vue.esm'
import axios from 'axios';
document.addEventListener('DOMContentLoaded', () => {
const vm =  new Vue({
  el: "#todo",

  data: {
      todos: [],
      formData: {
          text: null,
      },


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
    //   getArticle: function (id) {
    //       this.loading = true;
    //       axios
    //           .get(`http://localhost:8000/todo/todos/${id}/`)
    //           .then(response => {
    //               this.currentArticle = response.data;
    //               this.loading = false;
    //           })
    //           .catch(err => {
    //               this.loading = false;
    //               console.log(err);
    //           });
    //   },
      createTodo: function () {
          axios
              .post("http://localhost:8000/todo/todos/", this.formData)
              .then(response => {
                  this.readTodos();
              })
              .catch(err => {

                  console.log(err);
              });
      },
    //   updateArticle: function () {
    //       this.loading = true;
    //       axios
    //           .put(
    //               `http://localhost:8000/todo/todos/${this.currentArticle.article_id}/`,
    //               this.currentArticle
    //           )
    //           .then(response => {
    //               this.loading = false;
    //               this.currentArticle = response.data;
    //               this.readTodos();
    //           })
    //           .catch(err => {
    //               this.loading = false;
    //               console.log(err);
    //           });
    //   },
      deleteTodo: function (id) {

          axios
              .delete(`http://localhost:8000/todo/todos/${id}/`)
              .then(response => {

                  this.readTodos();
              })
              .catch(err => {

                  console.log(err);
              });
      }
  }
});
})
