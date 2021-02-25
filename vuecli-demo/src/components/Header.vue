<template>
  <div class="header" @click="changeTitle">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      // title: "Vue Component Demo",
    };
  },
  methods: {
    changeTitle() {
      // this.title = "米斯特吴 修改ltitle值";
      //注册事件 参数1:事件名称 参数2：...:值
      this.$emit("titleChange", "米斯特吴通过emit到App.vue中修改ltitle值");
    },
  },
  //生命周期函数
  beforeCreate() {
    alert("这时实例还没有被创建，所以你无法知道data,也不能用watch监听");
  },
  created() {
    alert("这时实例已经创建，可以得到data,也能使用watch监听，但是页面还是空白");
  },
  beforeMount() {
    alert(
      "页面挂载前，此时页面依然还是空白的，但是这时reader函数已经首次被调用了"
    );
  },
  mounted() {
    alert("页面挂载了，这时你可以看到页面的内容，也可以访问到dom");
  },
  beforeUpdate() {
    alert(
      "数据更新之前，也就是虚拟DOM打补丁之前，这时访问到的DOM还是原来的DOM"
    );
  },
  updated() {
    alert("数据以经更新完毕");
  },
  beforeDestroy() {
    alert("页面离开之前被调用，这时可以清楚定时器或者清楚第三方的DOM结构");
  },
  destroyed() {
    alert("当前实例已经销毁");
  },
};
</script>

<style scoped>
.header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>