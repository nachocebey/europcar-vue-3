<template>
  <div id="app">
    <div class="flex flex-col justify-center text-center m-10">
      <h1 class="text-5xl font-kalam">
        Your to-do<br />
        list
      </h1>
      <h5 class="font-kalam italic">by: Nacho Cebey</h5>
      <div class="flex justify-center gap-5">
        <CreateInput
          :items="this.$store.state.items"
          @createListItem="createTodo"
        />
        <EditItem
          v-if="openEditModule"
          :tagToEdit="tagToEdit"
          @editTodoListItem="editTodo"
          @deleteListItem="deleteTodo"

        />
      </div>
      <div>
        <SearchInput @filterItemList="filterItemList" />
        <ItemsList
          :items="this.$store.state.items"
          :filterTerm="filterTerm"
          @editListItem="openEditListItem"
        />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import CreateInput from "@/components/CreateInput.vue";
import SearchInput from "@/components/SearchInput.vue";
import ItemsList from "@/components/ItemsList.vue";
import EditItem from "@/components/EditItem.vue";

import { mapActions } from "vuex";

export default {
  name: "App",
  components: { CreateInput, SearchInput, ItemsList, EditItem },
  data() {
    return {
      openEditModule: false,
      tagToedit: null,
      tagToEditIndex: null,
      filterTerm: null,
    };
  },
  methods: {
    ...mapActions(["addItem", "editItem", "deleteItem"]),
    openEditListItem(item) {
      this.tagToEdit = item;
      this.tagToEditIndex = this.getItemIndex(item);
      this.openEditModule = true;
    },
    createTodo(value) {
      this.addItem(value);
    },
    editTodo(itemUpdated) {
      this.editItem({ newItem: itemUpdated, index: this.tagToEditIndex });
      this.openEditModule = false;
    },
    deleteTodo(item) {
      this.openEditModule = false;
      this.getItemIndex(item);
      this.deleteItem(this.getItemIndex(item));
    },
    filterItemList(searchTerm) {
      this.filterTerm = searchTerm;
    },
    getItemIndex(item) {
      let index;

      index = this.$store.state.items.findIndex((object) => {
        return object.tagName === item.tagName;
      });

      return index;
    },
  },
};
</script>

<style></style>
