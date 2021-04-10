<template>
  <v-card class="card">
    <v-card-title primary-title class="title">Add Spell</v-card-title>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              ref="name"
              color="#2fd61f"
              v-model="name"
              label="Spell Name"
              required
              focus
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="classLevel"
              label="Class and Level"
              required
              focus
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="school"
              label="School"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="castingTime"
              label="Casting Time"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="components"
              label="Components"
              required
            ></v-text-field>
          </v-col>
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
              v-model="target"
              label="Target"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="effect"
              label="Effect"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="duration"
              label="Duration"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="savingThrow"
              label="Saving Throw"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="spellResistance"
              label="Spell Resistance"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              color="#2fd61f"
              v-model="spellText"
              label="Spell Text"
              required
            ></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-card-actions>
      <v-btn class="addBtn" color="#2fd61f" @click="addSpell()"
        >Add Spell</v-btn
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
    classLevel: '',
    school: '',
    castingTime: '',
    components: '',
    range: '',
    target: '',
    effect: '',
    duration: '',
    savingThrow: '',
    spellText: '',
    spellResistance: ''
  }),

  methods: {
    addSpell() {
      database
        .ref('pf1eSpells')
        .push()
        .set({
          name: this.name,
          classLevel: this.classLevel,
          school: this.school,
          castingTime: this.castingTime,
          components: this.components,
          range: this.range,
          target: this.target,
          effect: this.effect,
          duration: this.duration,
          savingThrow: this.savingThrow,
          spellText: this.spellText,
          spellResistance: this.spellResistance
        });
    },
    clearForm() {
      (this.name = ''),
        (this.classLevel = ''),
        (this.school = ''),
        (this.castingTime = ''),
        (this.components = ''),
        (this.range = ''),
        (this.target = ''),
        (this.effect = ''),
        (this.range = ''),
        (this.duration = ''),
        (this.savingThrow = ''),
        (this.spellText = ''),
        (this.spellResistance = '');
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
