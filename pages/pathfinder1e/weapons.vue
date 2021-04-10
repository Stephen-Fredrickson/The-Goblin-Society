<template>
  <div>
    <v-card class="table-card" max-height="auto" style="overflow: auto">
      <v-card-title class="display-1">
        Weapons
        <div class="flex-grow-1">
          <!-- <nuxt-link v-bind:to="'/pathfinder1e/addWeapon'">
            <v-btn class="ml-4 addBtn" color="#2fd61f">Add Weapon</v-btn>
          </nuxt-link>-->
        </div>
        <v-text-field v-model="search" label="Search" single-line hide-details color="#2fd61f"></v-text-field>
      </v-card-title>

      <v-data-table
        height="auto"
        class="elevation-1"
        :headers="headers"
        :items="weapons"
        :single-expand="singleExpand"
        :expanded.sync="expanded"
        item-key="name"
        :search="search"
        show-expand
        sort-by="name"
      >
        <template :items="weapons" v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <v-card class="mb-2 mt-2 table-card">
              <v-card-text class="text-center">
                <p class="weapon-description">{{ item.description }}</p>
                <br />
                <v-card-text v-if="item.magical === 'Yes'">
                  <p>
                    <strong class="weapon-description">Aura:</strong>
                    {{item.magicAura}}
                  </p>
                  <p>
                    <strong class="weapon-description">CL:</strong>
                    {{item.casterLevel}}
                  </p>
                  <p>
                    <strong class="weapon-description">Properties:</strong>
                    {{item.magicProp}}
                  </p>
                  <p>
                    <strong class="weapon-description">Construction Requirements:</strong>
                    {{item.constructionReqs}}
                  </p>
                </v-card-text>
                <p v-else></p>
                <p class="weapon-description">
                  <strong class="source">Source Material:</strong>
                  {{ item.source }}
                  <a
                    href="https://paizo.com/pathfinder/rules"
                    target="_blank"
                    class="paizo-link"
                  >
                    <v-btn class="buy-button" x-small rounded color="#2fd61f">Buy</v-btn>
                  </a>
                </p>
              </v-card-text>
            </v-card>
          </td>
        </template>

        <template v-slot:item.name="{ item }">
          <v-chip outlined label :color="getColor(item.name)" dark>{{ item.name }}</v-chip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

   

<script>
import database from "../../server/database";

export default {
  head: { title: "PF 1 Weapons" },

  data() {
    return {
      props: true,
      search: "",
      singleExpand: true,
      title: "Pathfinder 1E Weapons",

      expanded: [],
      headers: [
        {
          text: "Weapon Name",
          align: "center",
          filterable: true,
          value: "name"
        },
        { text: "Type", value: "type", align: "center" },
        { text: "Proficiency", value: "proficiency", align: "center" },
        { text: "Magical", value: "magical", align: "center" },
        { text: "Damage (S)", value: "damageSmall", align: "center" },
        { text: "Damage (M)", value: "damageMedium", align: "center" },
        { text: "Range (Ft)", value: "range", align: "center" },
        { text: "Critical", value: "critical", align: "center" },
        { text: "Damage Type", value: "damageType", align: "center" },
        { text: "Weight (lbs)", value: "weight", align: "center" },
        { text: "Cost (gp)", value: "cost", align: "center" },
        { text: "Special", value: "special", align: "center" }
      ],

      weapons: []
    };
  },
  methods: {
    getColor(name) {
      if (name === name) return "#2fd61f";
    }
  },

  mounted() {
    database
      .ref("pf1eWeapons")
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
  color: #424242;
}

.addBtn {
  color: #424242;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #2fd61f;
}
.source {
  color: darkgray;
}
</style>
