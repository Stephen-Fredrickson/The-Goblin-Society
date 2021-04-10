<template>
  <div>
    <v-card class="table-card">
      <v-card-title class="display-1">
        Bestiary
        <div class="flex-grow-1">
          <!-- <nuxt-link to="/pathfinder1e/addCreature">
            <v-btn class="ml-4 addBtn" color="#2fd61f">Add Creature</v-btn>
          </nuxt-link>-->
        </div>
        <v-text-field v-model="search" label="Search" single-line hide-details color="#2fd61f"></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="creatures"
        :single-expand="singleExpand"
        :expanded.sync="expanded"
        item-key="name"
        :search="search"
        show-expand
        class="elevation-1"
      >
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <p class="creature-description">
              {{ item.description }}
              <v-btn
                :key="item.path"
                class="buy-button"
                :to="{ path: `./creatures/${item.name}` }"
                x-small
                rounded
                color="#2fd61f"
              >Stat Block</v-btn>
            </p>

            <p class="creature-description">
              {{ item.source }}
              <a href="https://paizo.com" target="_blank" class="paizo-link">
                <v-btn class="buy-button" rounded x-small color="#2fd61f">Buy</v-btn>
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
// database.ref("pf1eBestiary").on("child_added", function(snapshot) {
//   console.log(snapshot.val());
// });
export default {
  head: { title: "PF 1 Bestiary" },
  data() {
    return {
      props: true,
      search: "",
      singleExpand: true,
      title: "Pathfinder 1E Bestiary",
      expanded: [],
      headers: [
        {
          text: "Creature Name",
          align: "left",
          filterable: true,
          value: "name"
        },
        {
          text: "Race - Class - Level",
          value: "raceClassLvl",
          align: "center"
        },
        { text: "Type", value: "type", align: "center" },
        { text: "Terrain", value: "terrain", align: "center" },
        { text: "CR", value: "cr", align: "center" },
        { text: "XP", value: "xp", align: "center" }
      ],
      creatures: []
    };
  },

  mounted() {
    database
      .ref("pf1eBestiary")
      .on("child_added", snapshot => this.creatures.push(snapshot.val()));
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
.creature-description {
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
  color: #424242;
}

.addBtn {
  color: #424242;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #2fd61f;
}
</style>
