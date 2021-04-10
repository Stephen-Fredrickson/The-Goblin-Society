<template>
  <v-card class="card">
    <v-card-title primary-title class="title">Add Creature</v-card-title>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              ref="name"
              v-model="name"
              label="Creature Name"
              required
              focus
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="type"
              label="Creature Type"
              required
              focus
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="raceClassLvl"
              label="Race - Class - Level"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="cr"
              label="CR"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="xp"
              label="XP"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="terrain"
              label="Terrain"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="alignment"
              label="Alignment"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="size"
              label="Size"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="initiative"
              label="Initiative"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="senses"
              label="Senses"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="aura"
              label="Aura"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="ac"
              label="AC"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="hp"
              label="HP"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="savingThrows"
              label="Saving Throws"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="defensiveAbility"
              label="Defensive Ability"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="dr"
              label="DR"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="immune"
              label="Immune"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="resist"
              label="Resist"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="sr"
              label="SR"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="weaknesses"
              label="Weaknesses"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="speed"
              label="Speed"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="melee"
              label="Melee"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="ranged"
              label="Ranged"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="specialAttacks"
              label="Special Attacks"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="spellLike"
              label="Spell Like Abilities"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="spellsPrepared"
              label="Spells Prepared"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="str"
              label="STR"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="dex"
              label="DEX"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="con"
              label="CON"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="int"
              label="INT"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="cha"
              label="CHA"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="baseAttack"
              label="Base Attack"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="cmb"
              label="CMB"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="cmd"
              label="CMD"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="feats"
              label="Feats"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="skills"
              label="Skills"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="languages"
              label="Languages"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="sq"
              label="Special Qualities"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="environment"
              label="Environment"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="organization"
              label="Organization"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="#2fd61f"
              v-model="treasure"
              label="Treasure"
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
            <v-col cols="12" md="4">
              <v-text-field
                color="#2fd61f"
                v-model="source"
                label="Sources"
                required
              ></v-text-field>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-card-actions>
      <v-btn class="addBtn" color="#2fd61f" @click="addCreature()"
        >Add Creature</v-btn
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
    raceClassLvl: '',
    cr: '',
    xp: '',
    terrain: '',
    alignment: '',
    size: '',
    initiative: '',
    senses: '',
    aura: '',
    ac: '',
    hp: '',
    defensiveAbility: '',
    dr: '',
    immune: '',
    resist: '',
    weaknesses: '',
    speed: '',
    melee: '',
    ranged: '',
    specialAttacks: '',
    spellLike: '',
    spellsPrepared: '',
    str: '',
    dex: '',
    con: '',
    int: '',
    cha: '',
    savingThrows: '',
    baseAttack: '',
    cmb: '',
    cmd: '',
    feats: '',
    skills: '',
    languages: '',
    sq: '',
    environment: '',
    organization: '',
    treasure: '',
    description: '',
    source: ''
  }),

  methods: {
    addCreature() {
      database
        .ref('pf1eBestiary')
        .push()
        .set({
          name: this.name,
          type: this.type,
          raceClassLvl: this.raceClassLvl,
          cr: this.cr,
          xp: this.xp,
          terrain: this.terrain,
          alignment: this.alignment,
          size: this.size,
          initiative: this.initiative,
          senses: this.senses,
          aura: this.aura,
          ac: this.ac,
          hp: this.hp,
          defensiveAbility: this.defensiveAbility,
          dr: this.dr,
          immune: this.immune,
          resist: this.resist,
          weaknesses: this.weaknesses,
          speed: this.speed,
          melee: this.melee,
          ranged: this.ranged,
          specialAttacks: this.specialAttacks,
          spellLike: this.spellLike,
          spellsPrepared: this.spellsPrepared,
          str: this.str,
          dex: this.dex,
          con: this.con,
          int: this.int,
          cha: this.cha,
          savingThrows: this.savingThrows,
          baseAttack: this.baseAttack,
          cmb: this.cmb,
          cmd: this.cmd,
          feats: this.feats,
          skills: this.skills,
          languages: this.languages,
          sq: this.sq,
          environment: this.environment,
          organization: this.organization,
          treasure: this.treasure,
          description: this.description,
          source: this.source
        });
    },
    clearForm() {
      (this.name = ''),
        (this.type = ''),
        (this.raceClassLvl = ''),
        (this.cr = ''),
        (this.xp = ''),
        (this.terrain = ''),
        (this.alignment = ''),
        (this.size = ''),
        (this.initiative = ''),
        (this.senses = ''),
        (this.aura = ''),
        (this.ac = ''),
        (this.hp = ''),
        (this.source = ''),
        (this.defensiveAbility = ''),
        (this.dr = ''),
        (this.immune = ''),
        (this.resist = ''),
        (this.weaknesses = ''),
        (this.speed = ''),
        (this.melee = ''),
        (this.ranged = ''),
        (this.specialAttacks = ''),
        (this.spellLike = ''),
        (this.spellsPrepared = ''),
        (this.str = ''),
        (this.dex = ''),
        (this.con = ''),
        (this.int = ''),
        (this.cha = ''),
        (this.savingThrows = ''),
        (this.baseAttack = ''),
        (this.cmb = ''),
        (this.cmd = ''),
        (this.feats = ''),
        (this.skills = ''),
        (this.languages = ''),
        (this.sq = ''),
        (this.environment = ''),
        (this.organization = ''),
        (this.treasure = ''),
        (this.description = ''),
        (this.source = '');
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
