
import Vue from 'vue/dist/vue.esm'
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#axios',
    data: {
        message: "Hello Axios",
        users: [],

    },
    created() {
      axios
        .get("https://randomuser.me/api/", {
          params: {
            results: "10",
          },
        })
        .then((response) => (this.users = response.data.results))
        .catch((response) => console.log(response));
    }
  })
})
