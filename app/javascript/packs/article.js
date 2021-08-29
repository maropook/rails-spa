
import Vue from 'vue/dist/vue.esm'
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
const vm = new Vue({
    el: '#app',
    data() {
    return {
    articles: [],
    loading: false,
    currentArticle: {},
    message: null,
    newArticle: { article_heading: null,article_body: null },
    }
    },
    methods:{
  },
    mounted: function() {

    },
  })
})
