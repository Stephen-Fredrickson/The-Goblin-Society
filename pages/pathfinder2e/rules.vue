<template>
  <div d-flex>
    <v-card class="class-card d-inline" width="400">
      <v-card-title class="classes-card" d-inline>Ancestries</v-card-title>
      <v-expansion-panels class="class-card">
        <v-expansion-panel v-for="(card,i) in raceCards" :key="i">
          <v-expansion-panel-header>{{card.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container fluid>
              <v-card
                class="class-card mx-auto align-end"
                height="auto"
                width="auto"
                color="#2fd61f"
              >
                <v-card-title v-text="card.title" class="card-text"></v-card-title>
                <v-card-text class="flex-grow-1">
                  <p class="card-text">{{card.text}}</p>
                </v-card-text>
                <v-card-actions>
                  <nuxt-link :to="card.link">
                    <v-btn class="exploreButton" color="#424242">Explore</v-btn>
                  </nuxt-link>
                </v-card-actions>
              </v-card>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
    <v-card class="class-card d-inline" width="400">
      <v-card-title class="classes-card" d-inline>Classes</v-card-title>
      <v-expansion-panels class="class-card">
        <v-expansion-panel v-for="(card,i) in classCards" :key="i">
          <v-expansion-panel-header>{{card.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container fluid>
              <v-card
                class="class-card mx-auto align-end"
                height="auto"
                width="auto"
                color="#2fd61f"
              >
                <v-card-title v-text="card.title" class="card-text"></v-card-title>
                <v-card-text class="flex-grow-1">
                  <p class="card-text">{{card.text}}</p>
                </v-card-text>
                <v-card-actions>
                  <nuxt-link :to="card.link">
                    <v-btn class="exploreButton" color="#424242">Explore</v-btn>
                  </nuxt-link>
                </v-card-actions>
              </v-card>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    classCards: [
      {
        title: "Barbarian",
        text:
          "The Barbarian is a brutal berserker from beyond the edge of civilized lands.",
        flex: 2,
        link: "/pathfinder2e/classes/_barbarian"
      },
      {
        title: "Bard",
        text:
          "The Bard uses skill and spell alike to bolster his allies, confound his enemies, and build upon his fame.",
        flex: 2,
        link: "/"
      },
      {
        title: "Cleric",
        text:
          "A devout follower of  a deity, the Cleric can heal wounds, raise the dead, and call down the wrath of the gods.",
        flex: 2,
        link: "/"
      },
      {
        title: "Druid",
        text:
          "The Druid is a worshiper of all things natural - a spellcaster, a friend to animals, and a skilled shapechanger",
        flex: 2,
        link: "/"
      },
      {
        title: "Fighter",
        text:
          "Brave and stalwart, the Fighter is a master of all manner of arms and armor",
        flex: 2,
        link: "/"
      },
      {
        title: "Monk",
        text:
          "A student of martial arts, the Monk trains his body to be his greatest weapon and defense",
        flex: 2,
        link: "/"
      },
      {
        title: "Paladin",
        text:
          "The Paladin is the knight in shining armor, a devoted follower of law and good.",
        flex: 2,
        link: "/"
      },
      {
        title: "Ranger",
        text:
          "A tracker and hunter, the Ranger is a creature of the wild and of tracking down his favored foes.",
        flex: 2,
        link: "/"
      },
      {
        title: "Rouge",
        text:
          "The Rogue is a thief adn a scout, an opportunist capable of delivering brutal strikes against unwary foes.",
        flex: 2,
        link: "/"
      },
      {
        title: "Sorcer",
        text:
          "The spellcasting Sorcer is born with an inate knack for magic and has strange, eldritch powers",
        flex: 2,
        link: "/"
      },
      {
        title: "Wizard",
        text:
          "The Wizard masters magic through constant study that gives him incredible magical power.",
        flex: 2,
        link: "/"
      }
    ],
    raceCards: [
      {
        title: "Dwarves",
        text:
          "Dwarves are stoic but stern race, ensconced in cities carved from the hearts of mountains and fiercely determined to repel the depridations of savage races like orcs and goblins. More than any other race, the dwarves have acquired a reputation as dour and humorless craftsmen of the earth. It could be said that dwarven history shapes the dark disposition of many dwarves, for they reside in high mountains and dangerous realms below the earth, constantly at war with giants, goblins and other such horrors",
        flex: 2,
        link: "/pathfinder2e/races/_dwarves"
      },
      {
        title: "Elves",
        text: "Elves - Slinder and wise",
        flex: 2,
        link: "/"
      },
      {
        title: "Gnomes",
        text: "Gnomes - Small and Mischievious",
        flex: 2,
        link: "/"
      },
      {
        title: "Half-Elves",
        text: "Half-Elves - Half Elf.... Half Human",
        flex: 2,
        link: "/"
      },
      {
        title: "Half-Orcs",
        text: "Half-Orcs - Half Orcs.....Half Human... ",
        flex: 2,
        link: "/"
      },
      {
        title: "Halflings",
        text: "Halflings - Half a being",
        flex: 2,
        link: "/"
      },
      {
        title: "Human",
        text: "Most Prominant Race in most RPGS",
        flex: 2,
        link: "/"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.classes-card {
  color: #2fd61f;
  font-family: "Fredoka One", cursive;
  font-weight: 800;
}

.exploreButton {
  color: #2fd61f;
}
.card-text {
  color: #424242;
}

.class-card {
  box-shadow: 0px 10px 4px -1px rgba(0, 0, 0, 0.1),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #4de017;
}
</style>

