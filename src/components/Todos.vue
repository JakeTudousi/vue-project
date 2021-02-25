<template>
  <div>
    <!-- 在vue中使用for循环必须制定一个唯一的的值 ID或者是下标 -->
    <div :key="todo.index" v-for="(todo, index) in todos">
      <!-- <TodoItem :todo="todo" @deleteItem="deleteItem" /> -->
      <TodoItem :todo="todo" @deleteItem="$emit('handDelete', todo.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "todos", //组件名称
  //接受数据的两种方式
  //   props: ["todos"],
  props: {
    todos: {
      type: Array,
    },
  },
  components: {
    TodoItem,
  },
  methods: {
    deleteItem(id) {
      // console.log(id);
    },
  },
};
</script>

<style scoped>
</style>