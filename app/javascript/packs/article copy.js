
import Vue from 'vue/dist/vue.esm'
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {

const vm =  new Vue({
  el: "#starting",

  data: {
      articles: [],
      loading: true,
      currentArticle: {},
      message: null,
      newArticle: {
          article_heading: null,
          article_body: null,
      },
      search_term: ""
  },
  mounted: function () {
      this.getArticles();
  },
  methods: {
      getArticles: function () {
          let api_url = "http://localhost:8000/api/article/";
          if (this.search_term !== "" || this.search_term !== null) {
              api_url = `http://localhost:8000/api/article/?search=${this.search_term}`;
          }
          this.loading = true;
          axios
              .get(api_url)
              .then(response => {
                  this.articles = response.data.results;
                  this.loading = false;
              })
              .catch(err => {
                  this.loading = false;
                  console.log(err);
              });
      },
      getArticle: function (id) {
          this.loading = true;
          axios
              .get(`http://localhost:8000/api/article/${id}/`)
              .then(response => {
                  this.currentArticle = response.data;
                  $("#editArticleModal").modal("show");
                  this.loading = false;
              })
              .catch(err => {
                  this.loading = false;
                  console.log(err);
              });
      },
      addArticle: function () {
          this.loading = true;
          axios
              .post("http://localhost:8000/api/article/", this.newArticle)
              .then(response => {
                  this.loading = true;
                  this.getArticles();
              })
              .catch(err => {
                  this.loading = true;
                  console.log(err);
              });
      },
      updateArticle: function () {
          this.loading = true;
          axios
              .put(
                  `http://localhost:8000/api/article/${this.currentArticle.article_id}/`,
                  this.currentArticle
              )
              .then(response => {
                  this.loading = false;
                  this.currentArticle = response.data;
                  this.getArticles();
              })
              .catch(err => {
                  this.loading = false;
                  console.log(err);
              });
      },
      deleteArticle: function (id) {
          this.loading = true;
          axios
              .delete(`http://localhost:8000/api/article/${id}/`)
              .then(response => {
                  this.loading = false;
                  this.getArticles();
              })
              .catch(err => {
                  this.loading = false;
                  console.log(err);
              });
      }
  }
});
})
