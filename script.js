// todo button
// array mit den todos
// todo list <ul>
// funktion um todos hinzufügen
// input field

const app = Vue.createApp({
  data() {
    return {
      list: [
        {
          todo: "Learn HTML",
          done: false,
        },
        {
          todo: "Learn CSS",
          done: false,
        },
        {
          todo: "Learn Vue",
          done: false,
        },
      ],
      newTodo: "",
      isDone: "✔️",
      isNotDone: "❌",
    };
  },
  methods: {
    addTodo() {
      this.list.push({
        todo: this.newTodo,
        done: false,
      }),
        (this.newTodo = "");
    },
    deleteTodo(index) {
      this.list.splice(index, 1);
    },
  },
}).mount("#app");
