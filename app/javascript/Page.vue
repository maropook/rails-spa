<template>
  <div id="app">
    <div class="content">
      <ol>
        <li v-for="(item, i) in filterItems" :key="i">{{ item }}</li>
      </ol>
    </div>
    <div class="pagination">
      <div class="total">ページ {{ page }}/{{ totalPage }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page",
  components: {},
  data () {
    const items = new Array(200).fill(null).map((e, i) => `Item ${i + 1}`);
    const perPage = 10;
    return {
      items, //表示するデータがここに入る
      page: 1, //現在のページ番号
      perPage, //1ページ毎の表示件数
      totalPage: Math.ceil(items.length / perPage), //総ページ数
      count: items.length //itemsの総数
    };
  },
  computed: {
    filterItems () {
      return this.items.filter(
        (item, i) =>
          i >= (this.page - 1) * this.perPage &&
          i < this.page * this.perPage
      );
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
