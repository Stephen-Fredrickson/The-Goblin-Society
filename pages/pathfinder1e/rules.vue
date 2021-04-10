<template>
  <div>
    <v-tabs
      class="tabs"
      color="#2fd61f"
      slider-color="#2fd61f"
      fixed-tabs
      background-color="424242"
    >
      <v-tab>Table of Contents</v-tab>
      <v-tab-item>
        <v-card class="card">
          <v-toolbar color="#424242" dark>
            <v-spacer></v-spacer>
            <v-card-title class="cardTitle">
              <h1 class="heading">Table of Contents</h1>
            </v-card-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-divider></v-divider>
          <div>
            <v-card-text>
              <h3 class="heading">Getting Started:</h3>
              <p class="body-2">
                **Start here if you are a new player**<br />
                Here you will find everything you need to hit the ground
                running, from character creation to common terms.
              </p>
              <span></span>
              <h3 class="heading">Ability Scores:</h3>
              <p class="body-2">
                In this tab you will find everything you need to know about
                ability scores, how to roll for them and apply them to your PC
              </p>
              <v-spacer></v-spacer>
              <h3 class="heading">Races:</h3>
              <p class="body-2">
                In this tab you can explore all the Races Pathfinder 1st Edition
                has to offer.
              </p>
              <h3 class="heading">Classes:</h3>
              <p class="body-2">
                In this tab you can explore all the Classes Pathfinder 1st
                Edition has to offer.
              </p>
              <h3 class="heading">Combat:</h3>
              <p class="body-2">
                Here we cover all the combat rules your little Goblin hearts can
                handle.
              </p>
              <h3 class="heading">Enviroment:</h3>
              <p class="body-2">
                In this section we cover all the enviromental rules, like what
                you do if you start whistleing entirely to loud post combat and
                trigger an avalanche
              </p>
            </v-card-text>
          </div>
        </v-card>
      </v-tab-item>
      <v-tab>Getting Started</v-tab>
      <v-tab-item>
        <v-card
          ><v-toolbar color="#424242" dark>
            <v-spacer></v-spacer>
            <v-card-title class="cardTitle">
              <h1 class="heading">Getting Started</h1>
            </v-card-title>
            <v-spacer></v-spacer> </v-toolbar
        ></v-card>
      </v-tab-item>

      <v-tab>Ability Scores</v-tab>
      <v-tab-item>
        <v-card class="card justify-center"
          ><v-toolbar color="#424242" dark>
            <v-spacer></v-spacer>
            <v-card-title class="cardTitle">
              <h1 class="heading">Ability Scores</h1>
            </v-card-title>
            <v-spacer></v-spacer> </v-toolbar
          ><v-card-text
            ><h2 class="heading">Ability Scores</h2>
            <v-divider></v-divider>
            <p class="indent pt-2">
              Each character has six ability scores that represent his
              character's most basic attributes. They are his raw talent and
              prowess. While a character rarely rolls an ability check (using
              just an ability score), these scores, and the modifiesr they
              create, affect nearly every aspect of a character's skills and
              abilities. Each ranges from 3 to 18, although racial bonuses and
              penalties can alter this; an average ability score is 10.
            </p>
            <v-divider></v-divider>
            <h3 class="heading pb-2 pt-2">Generating Ability Scores</h3>
            <v-divider></v-divider>
            <p class="indent">
              There are a number of different methods used to generate ability
              scores. Each of these methods gives a different level of
              flexability and randomness to character generation
            </p>
            <p class="indent">
              <strong>Standard:</strong> Roll 4d6, discard the lowest die result
              and add the three remaining results together. Record this total
              and repeat the process until six numbers are generated. Assign
              these totals to your ability scores as you see fit. This method is
              less random than Classic and tends to create characters with
              above-average ability scores.
            </p></v-card-text
          ></v-card
        >
      </v-tab-item>
      <v-tab>Races</v-tab>
      <v-tab-item>
        <v-card class="card justify-center">
          <v-toolbar color="#424242" dark>
            <v-spacer></v-spacer>
            <v-card-title class="cardTitle">
              <h1 class="heading">Races</h1>
            </v-card-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-data-table
            :headers="raceHeaders"
            :items="races"
            sort-by="raceSize"
            class="elevation-1"
            dense
          >
            <template v-slot:item.name="{ item }">
              <v-chip outlined label :color="getColor(item.name)" dark>{{
                item.name
              }}</v-chip>
            </template>
            <template v-slot:item.action="{ item }">
              <v-btn
                outlined
                :key="item.path"
                :to="{ path: `./races/${item.name}` }"
                icon
                class="buy-button"
                color="#2fd61f"
              >
                <v-icon>mdi-sword</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>
      <v-tab>Classes</v-tab>
      <v-tab-item>
        <v-card class="card"
          ><v-toolbar color="#424242" dark>
            <v-spacer></v-spacer>
            <v-card-title class="cardTitle">
              <h1 class="heading">Classes</h1>
            </v-card-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-data-table
            :headers="classHeaders"
            :items="classes"
            sort-by="raceSize"
            class="elevation-1"
            dense
          >
            <template v-slot:item.name="{ item }">
              <v-chip outlined label :color="getColor(item.name)" dark>{{
                item.name
              }}</v-chip>
            </template>
            <template v-slot:item.action="{ item }">
              <v-btn
                outlined
                :key="item.path"
                :to="{ path: `./classes/${item.name}` }"
                icon
                class="buy-button"
                color="#2fd61f"
              >
                <v-icon>mdi-sword</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>
      <v-tab>Combat</v-tab>
      <v-tab-item>
        <v-card
          ><v-toolbar color="#424242" dark>
            <v-spacer></v-spacer>
            <v-card-title class="cardTitle">
              <h1 class="heading">Combat</h1>
            </v-card-title>
            <v-spacer></v-spacer> </v-toolbar
          ><v-card-text>
            <p>
              In the wild parts of the world wehre monsters hold dominion, a
              sharp sword and sturdy shield are a far more effective means of
              communication than words. Combat is a common part of the
              Pathfinder Roleplaying Game, and the following rules explain this
              crucial process.
            </p>
            <v-divider></v-divider>
            <h2 class="heading">How Combat Works</h2>
            <v-divider></v-divider>
            <p class="indent">
              Combat is cyclical; everybody acts in turn in a recular cycle of
              rounds. Combat follows this sequence:
            </p>
            <ol>
              <li>When combat begins, all combatants roll initiative.</li>
              <li>
                Determine which characters are aware of their opponents. These
                characters can act during a surprise round. If all the
                characters are aware of their opponents, proceed with normal
                rounds. See <a class="link">Surprise</a> section for more
                information.
              </li>
              <li>
                After the surprise round (if any), all combatants are ready to
                begin the first normal round of combat.
              </li>
              <li>Combatants act in initiative order (hightest to lowest).</li>
              <li>
                When everyone has had a turn, the next round begins with the
                combatant with the highest initiative, and repeat steps 4 and 5
                until combat ends.
              </li>
            </ol></v-card-text
          ></v-card
        >
      </v-tab-item>
      <v-tab>Magic</v-tab>
      <v-tab-item>
        <v-card
          ><v-toolbar color="#424242" dark>
            <v-spacer></v-spacer>
            <v-card-title class="cardTitle">
              <h1 class="heading">Magic Rules</h1>
            </v-card-title>
            <v-spacer></v-spacer> </v-toolbar
        ></v-card>
      </v-tab-item>

      <v-tab>Enviroment</v-tab>
      <v-tab-item>
        <!-- Link Test -->
        <v-card>
          <v-toolbar color="#424242" dark>
            <v-spacer></v-spacer>
            <v-card-title class="cardTitle">
              <h1 class="heading">Enviromental Rules</h1>
            </v-card-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text center-text>
            <h2 class="heading">Forest Terrain</h2>
            <p class="indent">
              forest terrain can be devided into three categories: sparse,
              medium, and dense. An immense forest could have all three
              categories within its borders, with more sparse terrain at the
              outer edge of the forest and dense forest at its heart.
            </p>
            <p class="indent">
              The table below describes in general terms how likely it is that a
              given square has a terrain element in it.
            </p>
            <v-divider></v-divider>
            <v-data-table
              :headers="forestCategories"
              :items="terrain"
              hide-default-footer
              class="elevation-1 simpleTable"
            ></v-data-table>
            <v-divider></v-divider>
            <br />
            <p class="indent">
              <strong>Trees:</strong> The most important terrain element in a
              forest is the trees, obviously. A creature standing in the same
              square as a tree gains partial cover, which grants a +2 bonus to
              Armor Class and a +1 bonus on Reflex saves. The presence of a tree
              doesn't otherwise affect a creature's fighting space, because it's
              assumed that the creature is using the tree to its advantage when
              it can. The trunk of a typical tree has AC 4, Hardness 5, and 150
              HP. A DC 15 Climb check is sufficient to climb a tree. Medium and
              dense forests have massive trees as well. These trees take up and
              entire square and provide cover to anyone behind them. They have
              AC 3, Hardness 5, and 600 HP. Like thier smaller counterparts, it
              takes a DC 15 Climb check to climb them.
            </p>
            <p class="indent">
              <strong>Undergrowth:</strong> Vines, roots, and short bushes cover
              much of the ground in a forest. A spac covered with light
              undergrowht costs 2 squares of movement to move into, and provides
              concealment. Undergrowth increases the DC of Acrobatics and
              Stealth checks by 2 because the leaves and branches get in the
              way. Heavy Undergrowth costs 4 squares of movement to move into
              and provides concealment with a 30% miss chance (instead of the
              usual 20%). It increasesthe DC of Acrobatics checks by 5. Heavy
              Undergrowth is easy to hide in, granting a +5 circumstance bonus
              on Stealth Checks. Running and charging are impossible. Squares
              with undergrowth are often clustered together. Undergrowth and
              trees aren't mutually exclusive; it's common for a 5-foot square
              to have both trees and undergrowth.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    forestCategories: [
      {
        text: '',
        align: 'center',
        value: 'name',
        sortable: false
      },
      { text: 'Sparce', value: 'sparse', align: 'center', sortable: false },
      { text: 'Medium', value: 'medium', align: 'center', sortable: false },
      { text: 'Dense', value: 'dense', align: 'center', sortable: false }
    ],
    terrain: [
      {
        name: 'Typical Trees',
        sparse: '50%',
        medium: '70%',
        dense: '80%'
      },
      {
        name: 'Massive Trees',
        sparse: '--',
        medium: '10%',
        dense: '20%'
      },
      {
        name: 'Light Undergrowth',
        sparse: '50%',
        medium: '70%',
        dense: '50%'
      },
      {
        name: 'Heavy Undergrowth',
        sparse: '--',
        medium: '20%',
        dense: '50%'
      }
    ],
    raceHeaders: [
      {
        text: 'Race',
        align: 'center',
        sortable: false,
        value: 'name'
      },
      { text: 'Source', value: 'raceSsource', align: 'center' },
      { text: 'Size', value: 'raceSize', align: 'center' },
      { text: 'Speed (Ft)', value: 'raceSpeed', align: 'center' },
      { text: 'Explore', value: 'action', sortable: false, align: 'center' }
    ],
    classHeaders: [
      {
        text: 'Class',
        align: 'center',
        sortable: false,
        value: 'name'
      },
      { text: 'Source', value: 'classSsource', align: 'center' },
      { text: 'Alignment', value: 'classAlignment', align: 'center' },
      { text: 'Hit Die', value: 'classHitDie', align: 'center' },
      { text: 'Explore', value: 'action', sortable: false, align: 'center' }
    ],
    races: [
      {
        name: 'Dwarves',
        raceSize: 'Medium',
        raceSpeed: 20,
        raceSsource: 'Core Rulebook'
      },
      {
        name: 'Elves',
        raceSize: 'Medium',
        raceSpeed: 30,
        raceSsource: 'Core Rulebook'
      },
      {
        name: 'Gnomes',
        raceSize: 'Small',
        raceSpeed: 20,
        raceSsource: 'Core Rulebook'
      },
      {
        name: 'Half-Elves',
        raceSize: 'Medium',
        raceSpeed: 30,
        raceSsource: 'Core Rulebook'
      },
      {
        name: 'Half-Orcs',
        raceSize: 'Medium',
        raceSpeed: 30,
        raceSsource: 'Core Rulebook'
      },
      {
        name: 'Halflings',
        raceSize: 'Small',
        raceSpeed: 20,
        raceSsource: 'Core Rulebook'
      },
      {
        name: 'Humans',
        raceSize: 'Medium',
        raceSpeed: 30,
        raceSsource: 'Core Rulebook'
      }
    ],
    classes: [
      {
        name: 'Barbarian',
        classAlignment: 'Any Nonlawful',
        classHitDie: 'd12',
        classSsource: 'Core Rulebook'
      },
      {
        name: 'Bard',
        classAlignment: 'Any',
        classHitDie: 'd8',
        classSsource: 'Core Rulebook'
      },
      {
        name: 'Cleric',
        classAlignment: 'Press Explore',
        classHitDie: 'd8',
        classSsource: 'Core Rulebook'
      },
      {
        name: 'Druid',
        classAlignment: 'Any Neutral',
        classHitDie: 'd8',
        classSsource: 'Core Rulebook'
      },
      {
        name: 'Fighter',
        classAlignment: 'Any',
        classHitDie: 'd10',
        classSsource: 'Core Rulebook'
      },
      {
        name: 'Monk',
        classAlignment: 'Any Lawful',
        classHitDie: 'd8',
        classSsource: 'Core Rulebook'
      },
      {
        name: 'Paladin',
        classAlignment: 'Lawful Good',
        classHitDie: 'd10',
        classSsource: 'Core Rulebook'
      },
      {
        name: 'Ranger',
        classAlignment: 'Any',
        classHitDie: 'd10',
        classSsource: 'Core Rulebook'
      },
      {
        name: 'Rogue',
        classAlignment: 'Any',
        classHitDie: 'd8',
        classSsource: 'Core Rulebook'
      },

      {
        name: 'Sorcerer',
        classAlignment: 'Any',
        classHitDie: 'd6',
        classSsource: 'Core Rulebook'
      },
      {
        name: 'Wizard',
        classAlignment: 'Any',
        classHitDie: 'd6',
        classSsource: 'Core Rulebook'
      }
    ]
  }),
  methods: {
    getColor(name) {
      if (name === name) return '#2fd61f';
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  text-decoration-color: #2fd61f;
  color: #2fd61f;
}
.indent {
  text-indent: 50px;
}
.tabs {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #2fd61f;
}
.card {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #2fd61f;
}
.cardTitle {
  color: #2fd61f;
}
.buy-button {
  color: #2fd61f;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #2fd61f;
}
.simpleTable {
  border: #2fd61f solid 1px;
}
.heading {
  color: #2fd61f;
}
</style>
