<template>
  <!-- HTML结构：只能有一个根标签 -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ wechat }}</h1>
    <p>{{ greeting() }}</p>
    <p></p>
  </div>
</template>

<script>
//js 部分 逻辑部分
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "米斯特吴",
      wechat: "604799353",
    };
  },
  methods: {
    greeting() {
      return `大家好，我叫${this.msg},我的微信是${this.wechat}`;
    },
  },
};
</script>


<style scoped>
/* css 样式部分 */
</style>
