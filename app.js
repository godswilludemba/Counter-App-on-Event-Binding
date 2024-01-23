const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      Name: "",
      confirmName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmName = this.Name;
    },
    submitForm(e) {
      // e.preventDefault(); this can be achieved using modifiers
      alert("submitted successfully!");
    },
    setName(e) {
      this.Name = e.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
