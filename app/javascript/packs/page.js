
import Vue from 'vue/dist/vue.esm'
import InfiniteLoading from "vue-infinite-loading"

document.addEventListener('DOMContentLoaded', () => {
  var todos = [];

for(var i=0;i<100;i++)
{
    todos.push({
        text: "コンテンツ" + i, done: false
    });
}

Vue.use(InfiniteLoading);

new Vue({
    el: "#app",
    data: {
        page: 0,
        todos: []
    },
    methods: {
        infiniteHandler($state) {
            var self = this;
            if (self.todos.length >= this.page) {
                todos.slice(this.page,this.page+10).filter(function(item){
                    self.todos.push(item);
                    return item;
                });
                this.page += 10;
                $state.loaded();
            } else {
                $state.complete();
            }
        },
    }
});
})
