const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello!",
    };
  },

  mounted() {
    axios.get("").then((response) => {});
  },
  
}).mount("#app");