<template>
  <div class="style1">
    <h1>{{ message }}</h1>
    <p v-for="(user, key) in users" :key="key">
      {{ user.name.title }} {{ user.name.last }}
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      message: "Hello Axios",
      users: [],
    };
  },
  created () {
    axios
      .get("https://randomuser.me/api/", {
        params: {
          results: "10",
        },
      })
      .then((response) => (this.users = response.data.results))
      .catch((response) => console.log(response));
  },
};
</script>
<style>
.style1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 120px;
}
</style>
