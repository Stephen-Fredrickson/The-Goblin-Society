<template>
  <v-card class="card">
    <v-card-title primary-title class="title" >Add Weapon</v-card-title>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
            color="#2fd61f"
              v-model="name"
              label="Weapon Name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
            color="#2fd61f"
              v-model="hands"
              label="Hands"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field 
            color="#2fd61f"
            v-model="damage" 
            label="Damage" 
            required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
            color="#2fd61f"
              v-model="damageType"
              label="Damage Type"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
            color="#2fd61f"
              v-model="group"
              label="Group"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field 
            color="#2fd61f"
            v-model="bulk" 
            label="Bulk" 
            required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
            color="#2fd61f"
              v-model="range"
              label="Range"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
            color="#2fd61f"
              v-model="reload"
              label="Reload"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field 
            color="#2fd61f"
            v-model="weaponTrait" 
            label="Weapon Trait" 
            required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="cost"
              label="Cost"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
            color="#2fd61f"
              v-model="source"
              label="Source"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-textarea 
            color="#2fd61f"
            v-model="description" 
            label="Description" 
            required
            ></v-textarea>
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
import database from "../../server/database"

export default {
  data: () => ({
    valid: false,
    name: "",
    hands: "",
    damage: "",
    damageType: "",
    group: "",
    range: "",
    weaponTrait: "",
    bulk: "",
    cost: "",
    reload: "",
    source: "",
    description: "",
  }),

  methods: {
    addWeapon() {
      database.ref('p2eWeapons').push().set({
    name: this.name,
    hands: this.hands,
    damage: this.damage,
    damageType: this.damageType,
    group: this.group,
    range: this.range,
    weaponTrait: this.weaponTrait,
    bulk: this.bulk,
    cost: this.cost,
    reload: this.reload,
    source: this.source,
    description: this.description,
    })
    },
    clearForm() {
    this.name = "",
    this.hands = "",
    this.damage = "",
    this.damageType = "",
    this.group = "",
    this.range = "",
    this.weaponTrait = "",
    this.bulk = "",
    this.cost = "",
    this.reload = "",
    this.source = "",
    this.description = ""
    }
    }
  }

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
.title{
  color: #2fd61f,
  
}
</style>