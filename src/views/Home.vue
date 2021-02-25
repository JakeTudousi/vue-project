<template>
  <div>
    <AddTodo v-on:handleAdd="handleAdd" />
    <Todos :todos="todos" @handDelete="handDelete" />
  </div>
</template>

<script>
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      msg: "hello",
      todos: [],
    };
  },
  methods: {
    handDelete(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(
          (res) => (this.todos = this.todos.filter((todo) => todo.id !== id))
        )
        .catch((err) => console.log(err));

      //返回除了 id与传回的参数id相等的 其他对象，组成一个行的数组并将其赋予给 this.todos
      // this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    handleAdd(newTodo) {
      // this.todos.push(newTodo);
      // this.todos.unshift(newTodo);

      //新语法 参考react
      // this.todos = [...this.todos, newTodo];

      const { title, completed } = newTodo; //结构语法 跟下列两句效果一样
      // const title=newTodo.title;
      // const completed=newTodo.completed;

      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title: title,
          completed: completed,
        })
        .then((res) => (this.todos = [res.data, ...this.todos]))
        .catch((err) => console.log(err));
    },
  },
  created() {
    //数据请求
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        // console.log(res.data)
        this.todos = res.data;
      })
      .catch((err) => console.log(err));
  },
  components: {
    Todos,
    AddTodo,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>