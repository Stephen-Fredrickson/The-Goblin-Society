<template>
  <v-card class="border">
    <div>
      <v-toolbar color="#2fd61f" dark>
        <v-spacer></v-spacer>
        <v-btn class="buy-button" to="../rules.vue" x-small rounded color="#424242"
          >Back to Rules</v-btn
        ></v-toolbar
      >
      <v-card v-for="item in barbarian" :key="item.id" class="border">
        <v-card-title class="brand">
          <h1>{{ item.name }}</h1>
        </v-card-title>
        <v-divider></v-divider>
        <div>
          <v-card-text>
            <h3 class="brand">Role:</h3>
            <p class="body-2">{{ item.role }}</p>
            <span></span>
            <h3 class="brand">Alignment:</h3>
            <p class="body-2">{{ item.alignment }}</p>
            <v-spacer></v-spacer>
            <h3 class="brand">Hit Die:</h3>
            <p class="body-2">{{ item.hitDie }}</p>
          </v-card-text>
        </div>
      </v-card>
    </div>
    <div>
      <h1 class="title text-center pa-3 ma-3">Barbarian Leveling Table</h1>
      <v-card>
        <v-data-table
          dense
          :headers="headers"
          :items="classTable"
          class="elevation-1"
          disable-pagination
          hide-default-footer
        ></v-data-table>
      </v-card>
    </div>
  </v-card>
</template>

<script>
import database from '../../../server/database';

// database.ref('barbarian').on('child_added', function(snapshot) {
//   console.log(snapshot.val());
// });
export default {
  data() {
    return {
      props: true,
      headers: [
        {
          text: 'Level',
          align: 'left',
          value: 'level'
        },
        { text: 'Base Attack Bonus', value: 'baseAtkBonus' },
        { text: 'Fortitude Save', value: 'fortSave' },
        { text: 'Reflex Save', value: 'refSave' },
        { text: 'Will Save', value: 'willSave' },
        { text: 'Special', value: 'Special' }
      ],
      classTable: [],
      barbarian: []
    };
  },
  created() {
    database
      .ref('barbarian')
      .on('child_added', snapshot => this.barbarian.push(snapshot.val()));
  },
  mounted() {
    database
      .ref('barbarianTable')
      .on('child_added', snapshot => this.classTable.push(snapshot.val()));
  }
};
</script>

<style lang="scss" scoped>
.brand {
  color: #2fd61f;
  font-family: 'Fredoka One', cursive;
}

.border {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #4de017;
}
.buy-button {
  color: #2fd61f;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #424242;
}
</style>
