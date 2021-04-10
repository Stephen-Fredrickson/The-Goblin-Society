<template>
  <v-card class="card">
    <v-card-title primary-title class="title"
      >Add Goods or Service</v-card-title
    >
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              ref="name"
              v-model="name"
              label="Item Name"
              required
              focus
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="type"
              label="Item Type"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="cost"
              label="Cost (gp)"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="weight"
              label="Weight (lbs)"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
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
          <v-col>
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
      <v-btn class="addBtn" color="#2fd61f" @click="addEquipment()"
        >Add Goods or Service</v-btn
      >
      <v-spacer></v-spacer>
      <v-btn class="clearBtn" color="#424242" @click="clearForm()">Clear</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import database from '../../server/database';

export default {
  data: () => ({
    valid: false,
    name: '',
    type: '',
    cost: '',
    weight: '',
    source: '',
    description: ''
  }),

  methods: {
    addEquipment() {
      database
        .ref('pf1eEquipment')
        .push()
        .set({
          name: this.name,
          type: this.type,
          cost: this.cost,
          weight: this.weight,
          source: this.source,
          description: this.description
        });
    },
    clearForm() {
      (this.name = ''),
        (this.type = ''),
        (this.cost = ''),
        (this.weight = ''),
        (this.source = ''),
        (this.description = '');
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
</style>
