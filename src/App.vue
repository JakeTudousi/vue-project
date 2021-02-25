<template>
  <div>
    <Todos :todos="todos" @handDelete="handDelete" />
  </div>
</template>

<script>
import Todos from "./components/Todos";
export default {
  name: "app",
  data() {
    return {
      msg: "hello",
      todos: [
        {
          id: 1,
          title: "待办事项1",
          completed: false,
        },
        {
          id: 2,
          title: "待办事项2",
          completed: false,
        },
        {
          id: 3,
          title: "待办事项3",
          completed: false,
        },
      ],
    };
  },
  methods: {
    handDelete(id) {
      //返回除了 id与传回的参数id相等的 其他对象，组成一个行的数组并将其赋予给 this.todos
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
  components: {
    Todos,
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
</style>