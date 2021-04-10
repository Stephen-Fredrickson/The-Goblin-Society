<template>
  <div>
    <v-app dark>
      <v-navigation-drawer
        left
        v-model="leftDrawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
        class="nav-drawer"
      >
        <v-responsive>
          <v-list-item-title class="title" pl-2>
            <icon-logo />
          </v-list-item-title>
        </v-responsive>

        <v-expansion-panels class="side-item">
          <v-expansion-panel v-for="(item, i) in pathfinder" :key="i">
            <v-expansion-panel-header class="header-title">
              {{
              item.name
              }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list>
                <v-list-item
                  v-for="(item, i) in pathfinderPages"
                  :key="i"
                  :to="item.to"
                  router
                  exact
                  class="inner-nav"
                >
                  <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title" />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-divider></v-divider>
        <v-expansion-panels class="side-item" pr-2>
          <v-expansion-panel v-for="(item, i) in pathfinder2E" :key="i">
            <v-expansion-panel-header class="header-title">
              {{
              item.name
              }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list>
                <v-list-item
                  v-for="(item, i) in pathfinder2Pages"
                  :key="i"
                  :to="item.to"
                  router
                  exact
                  class="inner-nav"
                >
                  <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title" />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-divider></v-divider>
        <v-expansion-panels class="side-item">
          <v-expansion-panel v-for="(item, i) in starfinder" :key="i">
            <v-expansion-panel-header class="header-title">
              {{
              item.name
              }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list>
                <v-list-item
                  v-for="(item, i) in starFinderPages"
                  :key="i"
                  :to="item.to"
                  router
                  exact
                  class="inner-nav"
                >
                  <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title" />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-divider></v-divider>
        <v-expansion-panels class="side-item">
          <v-expansion-panel v-for="(item, i) in laruna" :key="i">
            <v-expansion-panel-header class="header-title">
              {{
              item.name
              }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list>
                <v-list-item
                  v-for="(item, i) in larunaPages"
                  :key="i"
                  :to="item.to"
                  router
                  exact
                  class="inner-nav"
                >
                  <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title" />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-divider></v-divider>
      </v-navigation-drawer>
      <v-app-bar :clipped-left="clipped" fixed app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title v-text="title" />
      </v-app-bar>

      <v-app-bar :clipped-left="clipped" :clipped-right="clipped" fixed app>
        <v-app-bar-nav-icon @click.stop="leftDrawer = !leftDrawer" />
        <v-toolbar-title v-text="leftTitle" class="leftTitle" />
        <v-spacer />
        <nuxt-link to="/">
        <v-btn class="logo-btn pr-12 mr-12" x-large retain-focus-on-click=true text=true>
          <icon-logo />
        </v-btn>
        </nuxt-link>

        <v-spacer />
        <nuxt-link to="/ContactUs">
          <v-btn color="#2fd61f" small class="btn mr-12">Contact Us</v-btn>
        </nuxt-link>
      </v-app-bar>
      <v-main>
        <v-container class="innerApp">
          <nuxt />
        </v-container>
      </v-main>
      <v-footer>
        <v-card width="100%" class="footer">
          <v-card-text class="white--text text-center footer">
            {{ new Date().getFullYear() }} —
            <strong>The Goblin Society</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import IconLogo from "~/components/IconLogo.vue";
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
    IconLogo
  },
  data() {
    return {
      title: "",
      icons: [
        "mdi-facebook-box",
        "mdi-twitter-box",
        "mdi-google-plus-box",
        "mdi-linkedin-box",
        "mdi-instagram"
      ],
      clipped: false,
      leftDrawer: false,
      fixed: false,

      pathfinder: [{ name: "Pathfinder 1st Edition" }],
      pathfinder2E: [{ name: "Pathfinder 2nd Edition" }],
      starfinder: [{ name: "Starfinder" }],
      laruna: [{ name: "Dreamscape: Laruna" }],

      pathfinderPages: [
        {
          icon: "mdi-book-open-page-variant",
          title: "Rules",
          to: "/pathfinder1e/rules"
        },
        {
          icon: "mdi-sword-cross",
          title: "Weapons",
          to: "/pathfinder1e/weapons"
        },
        {
          icon: "mdi-shield-outline",
          title: "Armor",
          to: "/pathfinder1e/armor"
        },
        {
          icon: "mdi-bag-personal-outline",
          title: "Equipment",
          to: "/pathfinder1e/equipment"
        },
        {
          icon: "mdi-script-outline",
          title: "Spells",
          to: "/pathfinder1e/spells"
        },
        {
          icon: "mdi-arm-flex",
          title: "Bestiary",
          to: "/pathfinder1e/bestiary"
        }
      ],
      pathfinder2Pages: [
        {
          icon: "mdi-wrench",
          title: "Comiing Soon"
        }
        // {
        //   icon: "mdi-book-open-page-variant",
        //   title: "Rules",
        //   to: "/pathfinder2e/rules"
        // },
        // {
        //   icon: "mdi-sword-cross",
        //   title: "Weapons",
        //   to: "/pathfinder2e/weapons"
        // },
        // {
        //   icon: "mdi-shield-outline",
        //   title: "Armor",
        //   to: "/pathfinder2e/armor"
        // },
        // {
        //   icon: "mdi-bag-personal-outline",
        //   title: "Equipment",
        //   to: "/pathfinder2e/equipment"
        // },
        // {
        //   icon: "mdi-script-outline",
        //   title: "Spells",
        //   to: "/pathfinder2e/spells"
        // },
      ],
      starFinderPages: [
        {
          icon: "mdi-wrench",
          title: "Comiing Soon"
        }
        // {
        //   icon: "mdi-book-open-page-variant",
        //   title: "Rules",
        //   to: "/starfinder/rules"
        // },
        // {
        //   icon: "mdi-sword-cross",
        //   title: "Weapons",
        //   to: "/starfinder/weapons"
        // },
        // {
        //   icon: "mdi-shield-outline",
        //   title: "Armor",
        //   to: "/starfinder/armor"
        // },
        // {
        //   icon: "mdi-bag-personal-outline",
        //   title: "Equipment",
        //   to: "/starfinder/equipment"
        // },
        // {
        //   icon: "mdi-rocket",
        //   title: "Starships",
        //   to: "/"
        // },
        // {
        //   icon: "mdi-script-outline",
        //   title: "Spells",
        //   to: "/starfinder/spells"
        // },
      ],
      larunaPages: [
        {
          icon: "mdi-wrench",
          title: "Comiing Soon"
        }
        // {
        //   icon: "mdi-book-open-page-variant",
        //   title: "Rules",
        //   to: "/laruna/rules"
        // },
        // {
        //   icon: "mdi-sword-cross",
        //   title: "Weapons",
        //   to: "/laruna/weapons"
        // },
        // {
        //   icon: "mdi-shield-outline",
        //   title: "Armor",
        //   to: "/laruna/armor"
        // },
        // {
        //   icon: "mdi-bag-personal-outline",
        //   title: "Equipment",
        //   to: "/laruna/equipment"
        // },
        // {
        //   icon: "mdi-script-outline",
        //   title: "Spells",
        //   to: "/laruna/spells"
        // },
      ],

      miniVariant: false,
      right: true,
      leftTitle: "Explore the Society",
      pageTitle: "The Goblin Society"
    };
  }
};
</script>
<style lang="scss" scoped>
a {
  text-decoration-line: none;
  text-decoration-color: #2fd61f;
}
.logo-btn::before {
  color: transparent;
}

.logo-btn:hover {
  color: transparent;
}

.title {
  color: #2fd61f;
  height: auto;
  width: auto;
}

.v-toolbar {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #4de017;
}

.inner-nav {
  color: #2fd61f;
  background-color: #424242;
  margin: 10px 5px 10px 2px;
  border: solid 1px #2fd61f;
  border-radius: 10px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #4de017;
}

.side-item {
  color: #2fd61f;
  background-color: #424242;
  margin: 10px 1px 10px 0px;
  border: solid 1px #2fd61f;
}

.nav-drawer {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #2fd61f;
  background-color: #424242;
}

.v-footer {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #4de017;
}
.footer {
  background-color: #424242;
}

.side-item {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #4de017;
  font-family: "Fredoka One", "Proza Libre";
}

.leftTitle {
  color: #2fd61f;
  font-family: "Fredoka One", cursive;
  font-weight: 800;
}
.container {
  max-width: 1700;
}
.link {
  text-decoration-color: #2fd61f;
  color: #2fd61f;
}
.btn {
  color: #424242;
  display: flex;
}
</style>
