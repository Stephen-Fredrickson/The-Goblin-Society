<template>
  <div class="content">
    <v-card class="card">
      <v-card-title primary-title class="title justify-center"
        >Thank You for reaching out, we will contact you shortly.</v-card-title
      >
      <v-card-text class="justify-center text-center"
        ><h4>Long Live the Society!</h4></v-card-text
      >
      <v-card-actions class="justify-center">
        <v-btn to="/" color="#2fd61f" class="buy-button">Home</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.buy-button {
  color: #424242;
}
.card {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px #2fd61f;
}
</style>
