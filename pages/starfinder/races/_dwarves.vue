<template>
  <v-card class="card">
    <div>
      <v-card v-for="item in dwarves" :key="item.id" class="card">
        <v-card-title class="brand">
          <h1>{{ item.name }}</h1>
        </v-card-title>
        <v-divider></v-divider>
        <div>
          <v-card-text>
            <h3 class="brand">Description:</h3>
            <p class="body-2">{{item.description}}</p>
            <span></span>
            <h3 class="brand">Society:</h3>
            <p class="body-2">{{ item.society }}</p>
            <v-spacer></v-spacer>
            <h3 class="brand">Relations:</h3>
            <p class="body-2">{{ item.relations }}</p>
            <h3 class="brand">Alignment & Religion:</h3>
            <p class="body-2">{{ item.alignmentReligion }}</p>
            <h3 class="brand">Adventures:</h3>
            <p class="body-2">{{ item.adventures }}</p>
            <v-card class="brand card">
              <v-card-title>Dwarf Ratial Traits</v-card-title>
              <v-card-text>
                <p class="body-2">{{ item.racialTraits.modifiers }}</p>
                <p class="body-2">{{ item.racialTraits.size }}</p>
                <p class="body-2">{{ item.racialTraits.speed }}</p>
                <p class="body-2">{{ item.racialTraits.vision }}</p>
                <p class="body-2">{{ item.racialTraits.traitOne }}</p>
                <p class="body-2">{{ item.racialTraits.traitTwo }}</p>
                <p class="body-2">{{ item.racialTraits.traitThree }}</p>
                <p class="body-2">{{ item.racialTraits.traitFour }}</p>
                <p class="body-2">{{ item.racialTraits.traitFive }}</p>
                <p class="body-2">{{ item.racialTraits.traitSix }}</p>
                <p class="body-2">{{ item.racialTraits.traitSeven }}</p>
                <p class="body-2">{{ item.racialTraits.languages }}</p>
              </v-card-text>
            </v-card>
          </v-card-text>
        </div>
      </v-card>
    </div>
  </v-card>
</template>

<script>
import database from "../../../server/database"

database.ref("dwarves").on("child_added", function(snapshot) {
  console.log(snapshot.val());
});
export default {
  data() {
    return {
      props: true,
      dwarves: []
    };
  },
  created() {
    database
      .ref("dwarves")
      .on("child_added", snapshot => this.dwarves.push(snapshot.val()));
  }
};
</script>



<style lang="scss" scoped>
.brand {
  color: #4de017;
  font-family: "Fredoka One", cursive;
}
.card {
  box-shadow: 0px 10px 4px -1px rgba(0, 0, 0, 0.1),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #4de017;
}
.body-2 {
  padding: 3px;
}
</style>
