<template>
  <v-layout column justify-center align-center class="homePage">
    <v-flex xs12 sm8 md6>
      <logo class="welcome-logo" />
      <v-card class="welcome-card">
        <v-card-title class="justify-center">Welcome to The Goblin Society</v-card-title>
        <v-card-text class="text-center body-2">
          <p class="highlight">
            Our Site is Under Construction, this is our initial deployment to give the world a taste! More to come!
            <br />Please be paitiant with us as we update our site with the enormous amount of data as quickly as possible.
          </p>
        </v-card-text>
        <v-card-text class="text-center body-1">
          <p>The Goblin Society is where Table Top RPG enthusiest gather. Here you can find all the Rules, Equipment, and Resources your little goblin hearts desire.</p>
          <p>The Goblin society is the Game Master's and Player's dream, With our advanced search functions all of your favoirite game's mechanics are at your fingertips</p>
          <p>
            If you have questions, or would like to contribute please join the official
            <a
              href="https://discord.gg/UzYWgUw"
              target="_blank"
              title="chat"
              class="link"
            >Discord</a>. Or reach out to me directly via our
            <a
              href="./ContactUs"
              title="contact"
              class="link"
            >contact</a> form
          </p>
          <!-- <iframe src="https://discordapp.com/widget?id=648956980441907229&theme=dark" width="" height="500" allowtransparency="true" frameborder="0"></iframe> -->
          <p>
            Find a bug? Have a feature request? Report it on the github
            <a
              href="https://github.com/Stephen-Fredrickson/The-Goblin-Society/issues"
              target="_blank"
              title="contribute"
              class="link"
            >issue board</a>.
          </p>
          <p>Thank you for being a part of the Society</p>
          <div class="text-xs-right">
            <em>
              <small>&mdash; Stephen Fredrickson</small>
            </em>
          </div>
          <hr class="my-3" />
        </v-card-text>
        <v-card-text>
          <p class="communityUse text-center overline">
            "This Website uses trademarks and/or copyrights owned by Paizo Inc., which are used under Paizo's Community Use Policy. We are expressly prohibited from charging you to use or access this content. This website is not published, endorsed, or specifically approved by Paizo Inc. For more information about Paizo's Community Use Policy, please visit
            <a
              target="_blank"
              href="https://paizo.com/communityuse"
              class="link"
            >paizo.com/communityuse</a>. For more information about Paizo Inc. and Paizo products, please visit
            <a
              target="_blank"
              href="https://paizo.com"
              class="link"
            >paizo.com</a>."
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  head: { title: "Home" },
  components: {
    Logo,
    VuetifyLogo
  }
};
</script>

<style lang="css" scoped>
.link {
  text-decoration-color: #2fd61f;
  color: #2fd61f;
}
.homePage {
  background-image: url(../assets/sword.png);
  background: no-repeat;
}

.welcome-card {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #4de017;
  font-family: "Fredoka One", "Proza Libre";
}

.welcome-logo {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #4de017;
}

.highlight {
  color: #2fd61f;
}
</style>