import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "./index.css";
const store = createStore({
  state: {
    items: [
      { tagName: "Todo - 1", status: true },
      { tagName: "Todo - 2", status: false },
    ],
  },
  mutations: {
    add(state, newValue) {
      let newItem = {
        status: false,
        tagName: newValue,
      };
      state.items.push(newItem);
    },
    edit(state, data) {
      state.items[data.index] = data.newItem;
    },
    delete(state, index) {
      state.items.splice(index, 1)
    },
  },
  actions: {
    addItem(context, value) {
      context.commit("add", value);
    },
    editItem(context, value) {
      context.commit("edit", value);
    },
    deleteItem(context, value) {
      context.commit("delete", value);
    },
  },
});
const app = createApp(App);
app.use(store);
app.mount("#app");
