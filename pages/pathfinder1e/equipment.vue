<template>
  <div>
    <v-card class="table-card">
      <v-card-title class="display-1">
        Goods and Services
        <div class="flex-grow-1">
          <!-- <nuxt-link to="/pathfinder1e/addEquipment">
            <v-btn class="ml-4 addBtn" color="#2fd61f"
              >Add Goods and Services</v-btn
            >
          </!-->
        </div>
        <v-text-field v-model="search" label="Search" single-line hide-details color="#2fd61f"></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="equipment"
        :single-expand="singleExpand"
        :expanded.sync="expanded"
        item-key="name"
        :search="search"
        show-expand
        class="elevation-1"
      >
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <p class="weapon-description">{{ item.description }}</p>

            <p class="weapon-description">
              {{ item.source }}
              <a href="https://paizo.com" target="_blank" class="paizo-link">
                <v-btn class="buy-button" x-small rounded color="#424242">Buy</v-btn>
              </a>
            </p>
          </td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import database from "../../server/database";

database.ref("pf1eWeapons").on("child_added", function(snapshot) {
  // console.log(snapshot.val());
});
export default {
  data() {
    return {
      props: true,
      search: "",
      singleExpand: true,
      expanded: [],
      headers: [
        {
          text: "Item",
          align: "left",
          filterable: true,
          value: "name"
        },

        { text: "Type", value: "type", align: "center" },
        { text: "Cost (gp)", value: "cost", align: "center" },
        { text: "Weight (lbs)", value: "weight", align: "center" }
      ],
      equipment: []
    };
  },
  mounted() {
    database
      .ref("pf1eEquipment")
      .on("child_added", snapshot => this.equipment.push(snapshot.val()));
  },
  watch: {
    handler: "mounted()",
    immediate: true
  }
};
</script>

<style lang="css" scoped>
.display-1 {
  color: #2fd61f;
}
.weapon-description {
  color: #2fd61f;
}
.search {
  color: #2fd61f;
}

.table-card {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #4de017;
}

.buy-button {
  color: #2fd61f;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #4de017;
}

.addBtn {
  color: #424242;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #2fd61f;
}
</style>
