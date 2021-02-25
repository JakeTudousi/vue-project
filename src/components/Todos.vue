<template>
  <div>
    <!-- 在vue中使用for循环必须制定一个唯一的的值 ID或者是下标 -->
    <div :key="todo.index" v-for="(todo, index) in todos">
      {{ todo.title }} - {{ index }}
    </div>
  </div>
</template>

<script>
export default {
  name: "todos", //组件名称
  //接受数据的两种方式
  //   props: ["todos"],
  props: {
    todos: {
      type: Array,
    },
  },
};
</script>

<style scoped>
</style>