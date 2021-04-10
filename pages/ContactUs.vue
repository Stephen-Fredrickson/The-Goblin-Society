<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="card pl-3 pr-3" justify="center">
          <v-card-title primary-title class="cardTitle display-1 font-weight-bold">Contact Us</v-card-title>
          <v-card-text>
            <p>
              Please fill out the form below and we will reply back within 24
              Hours, or you can join our
              <a
                href="https://discord.gg/UzYWgUw"
                target="_blank"
                title="chat"
                class="link"
              >Discord</a>. We look forward to hearing from you!
            </p>
          </v-card-text>
          <v-form name="contact-form" action="/thankYou" method="post">
            <v-text-field color="#2fd61f" label="Name" name="name" v-model="name"></v-text-field>
            <v-text-field color="#2fd61f" label="Email" name="email" v-model="email"></v-text-field>
            <v-textarea color="#2fd61f" label="Message" name="message" v-model="message"></v-textarea>
            <v-card-actions>
              <v-btn value="send-message" class="buy-button form-button" type="submit" color="#2fd61f" @click="submit()">Submit</v-btn>
              <v-spacer></v-spacer>
              <v-btn class="clearBtn" color="#424242" @click="clearForm()">Clear Form</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "contact-form",
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    submit() {
      this.submitted = true;
      let stuff = {
        from: this.email,
        name: this.name,
        message: this.message
      };
      let headers = {
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json"
        }
      };
      axios
        .post("/api/email/", stuff, headers)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    clearForm() {
      this.name = "";
      this.email = "";
      this.message = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.buy-button {
  color: #424242;
}
.hidden {
  display: none;
}
.link {
  text-decoration-color: #2fd61f;
  color: #2fd61f;
}
.card {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #2fd61f;
}
.addBtn {
  color: #424242;
}
.clearBtn {
  color: #2fd61f;
}
.cardTitle {
  color: #2fd61f;
  font-family: "Fredoka One", "Proza Libre";
}
.titleColor {
  color: #2fd61f;
}
</style>
