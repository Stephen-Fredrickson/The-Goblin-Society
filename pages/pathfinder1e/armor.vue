<template>
  <div>
    <v-card class="table-card">
      <v-card-title class="display-1">
        Armor
        <div class="flex-grow-1">
          <!-- <nuxt-link to="/pathfinder1e/addArmor">
            <v-btn disabled class="ml-4 addBtn" color="#2fd61f">Add Armor</v-btn>
          </nuxt-link>-->
        </div>
        <v-text-field v-model="search" label="Search" single-line hide-details color="#2fd61f"></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="armor"
        :single-expand="singleExpand"
        :expanded.sync="expanded"
        item-key="name"
        :search="search"
        show-expand
        class="elevation-1"
      >
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <p class="armor-description">{{ item.description }}</p>

            <p class="armor-description">
              {{item.source}}
              <a
                href="https://paizo.com/products/btpy8tmc?Pathfinder-Roleplaying-Game-Ultimate-Equipment"
                target="_blank"
                class="paizo-link"
              >
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

// database.ref("armor").on("child_added", function(snapshot) {
//   console.log(snapshot.val());
// });
export default {
  data() {
    return {
      props: true,
      search: "",
      singleExpand: true,
      expanded: [],
      headers: [
        {
          text: "Armor Name",
          align: "left",
          filterable: true,
          value: "name"
        },
        { text: "Armor Class", value: "armorClass", align: "center" },
        { text: "Armor/Shield Bonus", value: "armorBonus", align: "center" },
        { text: "Max Dex Bonus", value: "maxDex", align: "center" },
        { text: "Armor Check Penalty", value: "armorPenalty", align: "center" },
        {
          text: "Arcane Spell Failure Chance(%)",
          value: "spellFailure",
          align: "center"
        },
        { text: "Speed (30ft / 20ft)", value: "speed", align: "center" },
        { text: "Cost (gp)", value: "cost", align: "center" },
        { text: "Weight", value: "weight", align: "center" }
      ],
      armor: []
    };
  },
  mounted() {
    database
      .ref("pf1eArmor")
      .on("child_added", snapshot => this.armor.push(snapshot.val()));
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
.armor-description {
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