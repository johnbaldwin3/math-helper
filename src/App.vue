<template>
  <v-app toolbar>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase font-weight-bold">
        <span>Math</span>
        <span class="font-weight-light">HELPER</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
      </v-btn> -->
    </v-app-bar>

    <router-view class="router-view-slot"></router-view>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style lang="stylus">
.router-view-slot {
  padding-top: 60px;
}
</style>
