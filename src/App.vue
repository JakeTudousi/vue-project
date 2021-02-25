<template>
  <div>
<<<<<<< Updated upstream
    <Todos :todos="todos" />
=======
    <Header />
    <!-- 路由切换的容器 -->
    <router-view> </router-view>
>>>>>>> Stashed changes
  </div>
</template>

<script>
<<<<<<< Updated upstream
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
  components: {
    Todos,
=======
import Header from "./components/layout/Header";
export default {
  name: "app",
  components: {
    Header,
>>>>>>> Stashed changes
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