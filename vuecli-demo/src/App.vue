<template>
  <div id="app">
    <!-- <form-one />
    <form-two /> -->
    <keep-alive>
      <component :is="component"> </component>
    </keep-alive>
    <button @click="component = 'form-one'">show form one</button>
    <button @click="component = 'form-two'">show form two</button>
  </div>
</template>

<script>
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";

export default {
  name: "App",
  data() {
    return {
      component: "form-two",
    };
  },
  components: {
    "form-one": FormOne,
    "form-two": FormTwo,
  },
};
</script>

<style scoped>
</style>
