<template>
  <div>
    <v-card class="table-card">
      <v-card-title class="display-1">
        Weapons
        <div class="flex-grow-1">
          <nuxt-link to="/pathfinder1e/addWeapon">
            <v-btn class="ml-4 addBtn" color="#2fd61f">Add Weapon</v-btn>
          </nuxt-link>
        </div>
        <v-text-field v-model="search" label="Search" single-line hide-details color="#2fd61f"></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="weapons"
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
              {{item.source}}
              <a
                href="https://paizo.com/products/btpy8tmc?Pathfinder-Roleplaying-Game-Ultimate-Equipment"
                target="_blank"
                class="paizo-link"
              >
                <v-btn class="buy-button" x-small rounded color="#010101">Buy</v-btn>
              </a>
            </p>
          </td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import database from "../../server/database"

database.ref("weapons").on("child_added", function(snapshot) {
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
          text: "Weapon Name",
          align: "left",
          filterable: true,
          value: "name"
        },
        { text: "Proficiency", value: "proficiency" },
        { text: "Damage (S)", value: "damageSmall" },
        { text: "Damage (M)", value: "damageMedium" },
        { text: "Range (Ft)", value: "range" },
        { text: "Critical", value: "critical" },
        { text: "Damage Type", value: "damageType" },
        { text: "Weight (lbs)", value: "weight" },
        { text: "Cost (gp)", value: "cost" },
        { text: "Special", value: "special" }
      ],
      weapons: []
    };
  },
  mounted() {
    database
      .ref("weapons")
      .on("child_added", snapshot => this.weapons.push(snapshot.val()));
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
}

.addBtn {
  color: #424242;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #2fd61f;
}
</style>