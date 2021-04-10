<template>
  <v-row justify="center" max-width>
    <v-col cols="auto" sm="auto" md="auto">
      <v-card class="card" v-for="(item, index) in creature" :key="index">
        <v-toolbar class="title" color="#424242" dark>
          <v-toolbar-title class="display-2 font-weight-black">{{ item.name }}</v-toolbar-title>
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
            {{ item.ac }}, Touch {{ item.touchAc }}, Flat-footed
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
            {{ item.Treasure }}
            <br />
          </p>
        </v-card-text>
        <v-card-text>
          <v-toolbar class="title text-center" color="#424242" dark>
            <v-toolbar-title class="text-center">Description</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-title></v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <div class="indent">
              Goblins prefer to dwell in caves, amid large and dense thickets of
              thistles and brambles, or in structures built and then abandoned by
              others. Very few goblins have the drive to build structures of their
              own. Coastlines are favored, as goblins are quite fond of sifting
              through junk and flotsam in an unending quest to find treasures
              among the refuse of more civilized races.
            </div>
            <br />

            <div class="indent">
              Goblin hatred runs deep, and few things inspire their wrath more
              than gnomes (who have long fought against goblins), horses (who
              frighten goblins tremendously), and regular dogs (whom goblins
              regard as pale imitations of goblin dogs).
            </div>
            <br />

            <div class="indent">
              Goblins are also quite superstitious, and treat magic with a fawning
              mixture of awe and fear. They have the habit of ascribing magic to
              the mundane as well, with fire and writing both taking on mystical
              power in goblin society. Fire is much loved by goblins for its
              capacity to wreak great destruction and because it doesn’t require
              size or strength to wield, but written words are hated. Goblins
              believe that writing steals words out of your head, and as a result
              of this belief, goblins are universally illiterate.
            </div>
            <br />

            <div class="indent">
              Goblins are voracious and can eat their body weight in food daily
              without growing fat. Goblin lairs always have numerous storerooms
              and larders. While they prefer human and gnome flesh, a goblin won’t
              turn down any food—except, perhaps, vegetables.
            </div>
          </v-card-text>
          <v-toolbar class="title" color="#424242" dark>
            <v-toolbar-title>Goblin Characters</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-title></v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            Goblins are defined by their class levels—they do not possess racial
            Hit Dice. All goblins have the following racial traits.
            <br />
            <div class="indent">
              <strong>–2 Strength, +4 Dexterity, –2 Charisma:</strong> Goblins are
              fast, but weak and unpleasant to be around.
            </div>
            <div class="indent">
              <strong>Small:</strong> Goblins are Small creatures and gain a +1
              size bonus to their AC, a +1 size bonus on attack rolls, a –1
              penalty to their CMB and CMD, and a +4 size bonus on Stealth checks.
            </div>
            <div class="indent">
              <strong>Fast:</strong> Goblins are fast for their size, and have a
              base speed of 30
            </div>feet.
            <div class="indent">
              <strong>Darkvision:</strong> Goblins can see in the dark up to 60
              feet.
            </div>
            <div class="indent">
              <strong>Skilled:</strong> +4 racial bonus on Ride and Stealth
              checks.
            </div>
            <div class="indent">
              <strong>Languages:</strong> Goblins begin play speaking Goblin.
              Goblins with high Intelligence scores can choose any of these bonus
              languages: Common, Draconic, Dwarven, Gnoll, Gnome, Half ling, Orc.
            </div>
          </v-card-text>
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
        </v-card-text>
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
      .child("-Lx1saZY5GNJLU1bCZqo")
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
.indent {
  text-indent: 50px;
}
.title {
  color: #2fd61f;
}
.buy-button {
  color: #2fd61f;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #424242;
}

.card {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #2fd61f;
}
</style>
