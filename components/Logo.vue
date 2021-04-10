<template>
  <v-responsive>
    <v-img
      contain
      :src="require('@/assets/logo.png')"
      alt="Goblin giving thumbs up"
      align-center
      height="40vmin"
      width="auto"
    />
  </v-responsive>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-responsive{
  background: rgb(200,255,0);
  background: -moz-radial-gradient(circle, rgba(200,255,0,1) 0%, rgba(48,255,0,1) 100%);
  background: -webkit-radial-gradient(circle, rgba(200,255,0,1) 0%, rgba(48,255,0,1) 100%);
  background: radial-gradient(circle, rgba(200,255,0,1) 0%, rgba(48,255,0,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c8ff00",endColorstr="#30ff00",GradientType=1);

  //https://cssgradient.io/
  // includes max compatibility code for IE6+ compatibility
}
</style>