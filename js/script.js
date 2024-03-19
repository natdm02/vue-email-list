const app = Vue.createApp({
  data() {
    return {
      message: "Hello!",
      mail: [],
    };
  },

  methods: {
    generaMail() {
      this.mail = [];
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            this.mail.push(response.data.response);
          })
          .catch((error) => {
            console.error('Si è verificato un errore:', error);
          });
      }
    },
  },

  mounted() {
    this.generaMail();
  },
});


app.mount("#app");

