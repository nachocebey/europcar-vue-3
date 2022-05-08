<template>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-4 py-4" @submit="checkForm">
      <div class="mb-4">
        <div>
          <label class="flex text-gray-700 text-sm font-bold mb-2" for="todo">
            Tag name:
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="todo"
            type="text"
            placeholder="Tag"
            v-model="tagNameUpdated"
          />
        </div>
        <div class="flex flex-row items-center">
          <label
            class="flex text-gray-700 text-sm font-bold my-2 mr-2"
            for="todo"
          >
            Done:
          </label>
          <input
            id="checkbox-table-search-2"
            type="checkbox"
            class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded"
            v-model="tagStatusUpdated"
          />
        </div>
        <p
          v-for="item in errors"
          :key="item.message"
          class="text-red-500 text-xs italic"
        >
          {{ item.message }}
        </p>
      </div>
      <div class="flex items-center justify-center gap-3">
        <button
          class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline bg-"
          type="submit"
        >
          Update
        </button>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline bg-"
          type="button"
          @click="onClickDelete"
        >
          Delete
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    tagToEdit: Object,
  },
  data() {
    return {
      errors: [],
      tagNameUpdated: this.tagToEdit.tagName,
      tagStatusUpdated: this.tagToEdit.status,
    };
  },
  methods: {
    checkForm(e) {
      this.errors = [];

      if (this.tagNameUpdated.length <= 0) {
        this.errors.push({ message: "Tag name is empty!" });
      }

      if (!this.errors.length > 0) {
        this.$emit("editTodoListItem", {
          tagName: this.tagNameUpdated,
          status: this.tagStatusUpdated,
        });
        this.tagNameUpdated = "";
      }

      e.preventDefault();
    },
    onClickDelete() {
      this.$emit("deleteListItem", this.tagToEdit);
    },
  },
};
</script>

<style></style>
