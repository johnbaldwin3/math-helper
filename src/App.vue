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
    <v-navigation-drawer
      dark
      app
      floating
      permanent
    >
      <v-list
        dense
        rounded
      >
        <v-list-item>
          <v-select
            :items="numbers"
            v-model="multiplicandMaxVar"
            label="Multiplicand MAX"
            @change="handleMultiplicandMaxSelect()"
          >
          </v-select>
        </v-list-item>
        <v-list-item>
          <v-select
            :items="numbers"
            v-model="multiplierMaxVar"
            label="Multiplier MAX"
            @change="handleMultiplierMaxSelect()"
          >
          </v-select>
        </v-list-item>
        <v-list-item>
          <v-select
            :items="timerOptions"
            v-model="timerLimitMax"
            label="Time Limit"
            @change="handleTime()"
          >
          </v-select>
        </v-list-item>
        <v-list-item :disabled="timerRunning"
          @click="handleStartClick()"
        >
          <v-list-item-icon :disabled="timerRunning">
            <v-icon>{{ startOption.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ startOption.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view class="router-view-slot"></router-view>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'App',
  mounted() {
    this.setMultiplierMax(this.multiplierMaxVar);
    this.setMultiplicandMax(this.multiplicandMaxVar);
    this.setTimerLength(this.timerLimitMax.value)
  },
  data() {
    return {
      startOption: { title: 'Start', icon: 'play_circle_outline' },
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      multiplicandMaxVar: 12,
      multiplierMaxVar: 12,
      timerLimitMax: { text: '1 min', value: 60000 },
      timerOptions: [
        { text: '30 seconds', value: 30000 },
        { text: '1 min', value: 60000 },
        { text: '1.5 minutes', value: 90000 },
        { text: '2 mins', value: 120000 }
      ]

    }
  },
  computed: {
    ...mapGetters([
        "timerRunning",
        "timeLimit",
        "multiplicand",
        "multiplier",
        "product",
        "score",
        "scoreRecords",
        "timer",
        "timeLeft"
      ])
    },
    methods: {
      ...mapActions([
        "setMultiplicandMax",
        "setMultiplierMax",
        "setTimerLength",
        "setMultiplicand",
        "setMultiplier",
        "getProduct",
        "createNewProblem",
        "incrementScore",
        "startTimer"
      ]),
      handleStartClick() {
        this.createNewProblem();
        this.startTimer();
      },
      handleMultiplierMaxSelect() {
        this.setMultiplierMax(this.multiplierMaxVar);
      },
      handleMultiplicandMaxSelect() {
        this.setMultiplicandMax(this.multiplicandMaxVar);
      },
      handleTime() {
        this.setTimerLength(this.timerLimitMax)
      },
    }
};
</script>
<style lang="stylus">
.router-view-slot {
  margin-top: 60px;
}
</style>
