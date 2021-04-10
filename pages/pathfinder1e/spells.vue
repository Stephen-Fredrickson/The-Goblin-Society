<template>
  <div>
    <v-card class="mx-auto table-card" max-width="1700">
      <v-card-title class="display-1">
        Spells
        <div class="flex-grow-1">
          <!-- <nuxt-link to="/pathfinder1e/addSpell">
            <v-btn class="ml-4 addBtn" color="#2fd61f">Add Spell</v-btn>
          </nuxt-link>-->
        </div>
        <v-text-field v-model="search" label="Search" single-line hide-details color="#2fd61f"></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="pf1eSpells"
        :single-expand="singleExpand"
        :expanded.sync="expanded"
        item-key="name"
        :search="search"
        show-expand
        class="elevation-1"
        :dense="dense"
        loading="true"
        loading-text="Loading Data please wait ⚔"
      >
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <p class="weapon-description">{{ item.spellText }}</p>

            <p class="weapon-description">
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

database.ref("pf1eSpells").on("child_added", function(snapshot) {
  // console.log(snapshot.val());
});
export default {
  data() {
    return {
      props: true,
      search: "",
      singleExpand: true,

      dense: true,
      expanded: [],
      headers: [
        {
          text: "Spell Name",
          align: "center",
          filterable: true,
          value: "name",
          width: "16%"
        },
        {
          text: "Class & Level",
          value: "classLevel",
          align: "center",
          width: "16%"
        },
        { text: "School", value: "school", align: "center" },
        { text: "Casting Time", value: "castingTime", align: "center" },
        { text: "Components", value: "components", align: "center" },
        { text: "Range", value: "range", align: "center" },
        { text: "Target", value: "target", align: "center" },
        { text: "Effect", value: "effect", align: "center" },
        { text: "Duration", value: "duration", align: "center" },
        { text: "Saving Throw", value: "savingThrow", align: "center" },
        {
          text: "Spell Resistance",
          value: "spellResistance",
          align: "center"
        }
      ],
      pf1eSpells: []
    };
  },
  mounted() {
    database
      .ref("pf1eSpells")
      .on("child_added", snapshot => this.pf1eSpells.push(snapshot.val()));
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