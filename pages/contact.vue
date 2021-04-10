<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="card" justify="center">
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
          <v-form v-model="valid" label="contact_form" id="contact_form">
            <v-text-field
              color="#2fd61f"
              single-line
              label="name"
              name="name"
              v-model="name"
            ></v-text-field>
            <v-text-field
              color="#2fd61f"
              single-line
              label="email"
              name="email"
              v-model="email"
            ></v-text-field>
            <v-textarea
              color="#2fd61f"
              label="message"
              name="message"
              v-model="message"
            ></v-textarea>
          </v-form>
          <v-card-actions>
            <v-btn class="addBtn" color="#2fd61f" @click="submit()" type="submit">Submit</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="clearBtn" color="#424242" @click="clearForm()">Clear Form</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      // needs to include all the `v-model` items referenced, or page will throw an error
      name: "",
      from: "",
      text: "",
      valid: false,
      submitted: false
    };
  },
  methods: {
    submit() {
      this.submitted = true;
      /**
      let form = document.getElementById("contact_form");
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/email", true);
      let params = {
        name: this.name,
        from: this.from,
        message: this.text
      };
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(JSON.stringify(params));
      xhr.onload = () => console.log(xhr.status);
      **/
      axios.post('./api/email/',
        {
          from: this.from,
          name: this.name,
          message: this.text
        },
        {
          headers: {
              'Content-Type': 'application/json',
              'accept': 'application/json'
          }
        }
      )
      .then(res => {console.log(res.status);})
      .catch(err => {console.log(res.status);});
    },
    clearForm() {
      this.name = "";
      this.from = "";
      this.message = "";
    }
  }
};
</script>

<style lang="scss" scoped>
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
.title {
  color: #2fd61f;
}
</style>
