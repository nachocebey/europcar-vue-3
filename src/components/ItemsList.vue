<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      v-if="itemsList.length > 0"
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">Todo Name</th>
          <th scope="col" class="px-6 py-3">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in filteredList"
          :key="item.tagName"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
          @click="onClickRow(item)"
        >
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id="checkbox-table-search-2"
                type="checkbox"
                class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-table-search-2" class="sr-only"
                >checkbox</label
              >
            </div>
          </td>
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {{ item.tagName }}
          </th>
          <td class="px-6 py-4">
            <p v-if="item.status" class="text-green-600">Done</p>
            <p v-else class="text-red-600">Pending</p>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="w-full">
      <p class="text-xl p-4 text-gray-500">No data...yet</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    filterTerm: String,
  },
  data() {
    return {
      itemsList: this.items,
    };
  },
  computed: {
    filteredList() {
      let result = this.itemsList;

      if (this.filterTerm) {
        result = result.filter((item) =>
          item.tagName.toLowerCase().includes(this.filterTerm.toLowerCase())
        );
      }
      return result;
    },
  },
  methods: {
    onClickRow(item) {
      this.$emit("editListItem", item);
    },

  },
};
</script>

<style></style>
