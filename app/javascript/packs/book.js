
import Vue from 'vue/dist/vue.esm'
import axios from 'axios';
document.addEventListener('DOMContentLoaded', () => {
const vm =  new Vue({
  el: "#starting",

  data: {
    books: [],
    rakuten_books: [],
      loading: false,
      currentArticle: {},
      message: null,
      isbn:"9784098252022",
      testUrl:"https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=1089485087595106373&title=%E5%A4%AA%E9%99%BD&booksGenreId=001004008&sort=%2BitemPrice",
      url:"https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=1089485087595106373&isbn=9784098252022",
      newArticle:
      {
          title: "できたらいいな",
          title_kana: "ああ",
          author: "あああ",
          author_kana: "ああ",
          isbn: "ああ",
          sales_date: "ああ"
      },
      search_rakuten_books: "",

  },
  mounted: function () {


  },
  methods: {
      getRakutenBooks: function () {
          let api_url = "";
          if (this.search_rakuten_books !== "" || this.search_rakuten_books !== null) {
            // 9784098252022
              api_url = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=1089485087595106373&isbn=${this.search_rakuten_books}`;
              console.log(api_url);
          this.loading = false;
          axios
              .get(api_url)
              .then(response => {
                  this.rakuten_books = response.data["Items"][0].Item
          this.newArticle.title=this.rakuten_books.title;
          this.newArticle.title_kana=this.rakuten_books.titleKana;
          this.newArticle.author=this.rakuten_books.author;
          this.newArticle.author_kana=this.rakuten_books.authorKana;
          this.newArticle.isbn=this.rakuten_books.isbn;
          this.newArticle.sales_date=this.rakuten_books.salesDate;
                  this.loading = false;
              })
              .catch(err => {
                  this.loading = false;
                  console.log(err);
              }); }
      },
      addArticle: function () {
          console.log('え');

        axios
            .post("http://localhost:8000/book/book/", this.newArticle)
            .then(response => {
            console.log('成功');

            })
            .catch(err => {
                this.loading = true;
                console.log(err);
            });
    },

  }
});
})
