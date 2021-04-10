<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="card" v-for="(item, index) in creature" :key="index">
        <v-toolbar class="title" color="#424242" dark>
          <v-toolbar-title class="display-1">{{ item.name }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-title>CR:{{ item.cr }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <p class="subtitle-1 font-weight-bold">XP: {{ item.xp }}</p>
          <p>
            {{ item.raceClassLvl }}
            <br />
            {{ item.alignment }} {{ item.size }} {{ item.type }}
            <br />
            <strong>Init</strong>
            {{ item.initiative }};
            <strong>Senses</strong>
            {{ item.senses }}
          </p>

          <v-divider></v-divider>
          <h4>DEFENSE</h4>
          <v-divider></v-divider>
          <p>
            <strong>AC:</strong>

            {{ item.ac }}, Touch {{ item.touchAc }},
            Flat-footed
            {{ item.flatFootedAc }}
            <br />
            <strong>HP:</strong>
            {{ item.hp }}
            <br />
            <strong>{{ item.savingThrows }}</strong>
          </p>
          <v-divider></v-divider>
          <h4>OFFENSE</h4>
          <v-divider></v-divider>
          <p>
            <strong>Speed:</strong>
            {{ item.speed }}
            <br />
            <strong>Melee:</strong>
            {{ item.melee }}
            <br />
            <strong>Ranged:</strong>
            {{ item.ranged }}
          </p>

          <v-divider></v-divider>
          <h4>STATISTICS</h4>
          <v-divider></v-divider>
          <p>
            <strong>STR {{ item.str }},</strong>
            <strong>DEX {{ item.dex }},</strong>
            <strong>CON {{ item.con }},</strong>
            <strong>INT {{ item.int }},</strong>
            <strong>WIS {{ item.wis }},</strong>
            <strong>CHA {{ item.cha }},</strong>
            <br />
            <strong>Base Atk:</strong>
            {{ item.baseAttack }};
            <strong>CMB:</strong>
            {{ item.cmb }};
            <strong>CMD:</strong>
            {{ item.cmd }}
            <br />
            <strong>Feats:</strong>
            {{ item.feats }}
            <br />
            <strong>Skills:</strong>
            {{ item.skills }}
            <br />
            <strong>Languages:</strong>
            {{ item.languages }}
            <br />
          </p>
          <v-divider></v-divider>
          <h4>ECOLOGY</h4>
          <v-divider></v-divider>
          <p>
            <strong>Environment:</strong>
            {{ item.environment }}
            <br />
            <strong>Organization:</strong>
            {{ item.organization }}
            <br />
            <strong>Treasure:</strong>
            {{ item.treasure }}
            <br />
          </p>
        </v-card-text>
        <v-card-text></v-card-text>
        <v-toolbar color="#2fd61f" dark>
          <v-spacer></v-spacer>
          <v-btn
            class="buy-button"
            to="../bestiary"
            x-small
            rounded
            color="#424242"
          >Back to Bestiary</v-btn>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import database from "../../../server/database";
export default {
  data() {
    return {
      creature: []
    };
  },
  mounted() {
    database
      .ref("pf1eBestiary")
      // Change Below Child for each Creature in the Bestiary //
      .child("-Lx1hRXXfOBhn8N7PYuo")
      .on("value", snapshot => this.creature.push(snapshot.val()));
    console.log(this.creature);
  },
  watch: {
    handler: "mounted()",
    immediate: true
  }
};
</script>

<style lang="scss" scoped>
.title {
  color: #2fd61f;
}
.buy-button {
  color: #2fd61f;
}

.card {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #2fd61f;
}
</style>
