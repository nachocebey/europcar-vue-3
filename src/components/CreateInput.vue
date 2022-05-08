<template>
  <div class="w-full max-w-xs">
    <form
      class="bg-white shadow-md rounded px-6 py-6 h-full"
      @submit="checkForm"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="todo">
          Create To do
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="todo"
          type="text"
          placeholder="Tag"
          v-model="todoTag"
        />
        <p
          v-for="item in errors"
          :key="item.message"
          class="text-red-500 text-xs italic"
        >
          {{ item.message }}
        </p>
      </div>
      <div class="flex items-center justify-center">
        <button
          class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline bg-"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  data() {
    return {
      todoTag: "",
      errors: [],
    };
  },
  methods: {
    checkForm(e) {
      this.errors = [];

      if (this.todoTag.length <= 0) {
        this.errors.push({ message: "Tag name is empty!" });
      }

      if (this.items.some((e) => e.tagName === this.todoTag)) {
        this.errors.push({ message: "Tag name is repeated, try another" });
      }

      if (!this.errors.length > 0) {
        this.$emit("createListItem", this.todoTag);
        this.todoTag = "";
      }

      e.preventDefault();
    },
  },
};
</script>

<style></style>
