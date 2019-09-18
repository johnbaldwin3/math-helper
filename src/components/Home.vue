<template>
  <v-container>
    <v-row class="home">
      <v-row>
        <v-col>
          Home component
          <v-row><v-btn @click="createNewProblem">Click</v-btn></v-row>
        </v-col>
      </v-row>
      <v-col>
        <v-col xs12>
          <v-select
            :items="numbers"
            v-model="multiplicandMaxVar"
            label="Multiplicand MAX"
            @change="handleProduct()"
          >
          </v-select>
        </v-col>
        <v-col xs12>
          <v-select
            :items="numbers"
            v-model="multiplierMaxVar"
            label="Multiplier MAX"
            @change="handleProduct()"
          >
          </v-select>
        </v-col>
        <v-col xs12>
          <v-select
            :items="timerOptions"
            v-model="timerLimitMax"
            label="Time Limit"
            @change="handleTime()"
          >
          </v-select>
        </v-col>
      </v-col>
      <v-col column>
        <v-col>
          {{ multiplicand }}
        </v-col>
        <v-col>
          {{ multiplier }}
        </v-col>
        <v-col>
          -------
        </v-col>
        <v-col>
          {{ product }}
        </v-col>
      </v-col>
      
    </v-row>
    <v-row>
      <v-col>
        {{ timeLimit / 1000 }} second(s)
      </v-col>
    </v-row>


    <!-- Choose Options -->



    <!-- Start Program -->
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

  export default {
    name: "Home",
    data() {
      return {
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        multiplicandMaxVar: 0,
        productVar: this.handleProduct(),
        multiplierMaxVar: 0,
        multiplicandVar: 0,
        multiplierVar: 0,
        timerLimitMax: 0,
        timerOptions: [{ text: '30 seconds', value: 30000}, {text: '1 min', value: 60000}, {text: '1.5 minutes', value: '90000'}, {text: '2 mins', value: '120000'}]
      }
    },
    computed: {
      ...mapGetters([
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
        "createNewProblem"
      ]),
      handleProduct() {
        this.setMultiplicandMax(this.multiplicandMaxVar);
        this.setMultiplierMax(this.multiplierMaxVar);
      },
      handleTime() {
        this.setTimerLength(this.timerLimitMax)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.home {
  padding-top: 60px;
}
</style>