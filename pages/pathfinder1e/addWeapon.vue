<template>
  <v-card class="card">
    <v-toolbar color="#2fd61f" dark>
      <v-spacer></v-spacer>
      <v-btn class="buy-button" to="./weapons" x-small rounded color="#424242">Back to Weapons</v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-title primary-title class="title">Add Weapon</v-card-title>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field ref="name" color="#2fd61f" v-model="name" label="Weapon Name" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field color="#2fd61f" v-model="proficiency" label="Proficiency" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field color="#2fd61f" v-model="magical" label="Magical (Yes or No)" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field color="#2fd61f" v-model="damageSmall" label="Damage(S)" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field color="#2fd61f" v-model="damageMedium" label="Damage(M)" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field color="#2fd61f" v-model="damageType" label="Damage Type" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field color="#2fd61f" v-model="range" label="Range (Ft)" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field color="#2fd61f" v-model="type" label="Type" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field color="#2fd61f" v-model="critical" label="Critical" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field color="#2fd61f" v-model="special" label="Special" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field color="#2fd61f" v-model="cost" label="Cost" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field color="#2fd61f" v-model="weight" label="Weight" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field color="#2fd61f" v-model="source" label="Source" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea color="#2fd61f" v-model="description" label="Description" required></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field color="#2fd61f" v-model="magicAura" label="Magic Aura" required></v-text-field>
          </v-col>
          <v-col>
            <v-text-field color="#2fd61f" v-model="casterLevel" label="Caster Level" required></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              color="#2fd61f"
              v-model="constructionReqs"
              label="Construction Requirements"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea color="#2fd61f" v-model="magicProp" label="Magic Properties" required></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-card-actions>
      <v-btn class="addBtn" color="#2fd61f" @click="addWeapon()">Add Weapon</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="clearBtn" color="#424242" @click="clearForm()">Clear</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import database from "../../server/database";

export default {
  data: () => ({
    valid: false,
    name: "",
    type: "",
    damageSmall: "",
    damageMedium: "",
    damageType: "",
    proficiency: "",
    magical: "",
    range: "",
    special: "",
    weight: "",
    cost: "",
    critical: "",
    source: "",
    description: "",
    magicProp: "",
    magicAura: "",
    casterLevel: "",
    constructionReqs: ""
  }),

  methods: {
    addWeapon() {
      database
        .ref("pf1eWeapons")
        .push()
        .set({
          name: this.name,
          type: this.type,
          damageSmall: this.damageSmall,
          damageMedium: this.damageMedium,
          damageType: this.damageType,
          proficiency: this.proficiency,
          magical: this.magical,
          range: this.range,
          special: this.special,
          weight: this.weight,
          cost: this.cost,
          critical: this.critical,
          source: this.source,
          description: this.description,
          magicProp: this.magicProp,
          magicAura: this.magicAura,
          casterLevel: this.casterLevel,
          constructionReqs: this.constructionReqs
        });
    },
    clearForm() {
      (this.name = ""),
        (this.type = ""),
        (this.damageSmall = ""),
        (this.damageMedium = ""),
        (this.damageType = ""),
        (this.proficiency = ""),
        (this.magical = ""),
        (this.range = ""),
        (this.special = ""),
        (this.weight = ""),
        (this.cost = ""),
        (this.critical = ""),
        (this.source = ""),
        (this.description = ""),
        (this.magicProp = ""),
        (this.magicAura = ""),
        (this.casterLevel = ""),
        (this.constructionReqs = ""),
        this.$refs.name.focus();
    }
  }
};
</script>

<style lang="scss" scoped>
.addBtn {
  color: #424242;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #4de017;
}
.clearBtn {
  color: #2fd61f;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #4de017;
}
.card {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #4de017;
}
.title {
  color: #2fd61f;
}
.buy-button {
  color: #2fd61f;
}
</style>
