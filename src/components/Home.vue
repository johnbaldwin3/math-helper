<template>
  <v-container>
    <v-row>
      <v-col>
        {{ timeLeft }}
      </v-col>
    </v-row>
    <v-row class="home">
      <v-row>
        <v-col>
            SCORE ({{score}})
        </v-col>
      </v-row>
      <v-col>
        <v-col>
          {{' '}}{{ multiplicand }}
        </v-col>
        <v-col>
        x  {{ multiplier }}
        </v-col>
        <v-col>
          -------
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              <v-form
                ref="form"
                v-model="valid"
                :lazy-validation="true"
              >
                <v-text-field
                  v-model="productAnswer"
                  :rules="numberRules"
                  label="Answer"
                  required
                ></v-text-field>
              </v-form>
            </v-col>
            <v-col>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="submitAnswer"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-col> 
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

  export default {
    name: "Home",
    data() {
      return {
        valid: false,
        numberRules: [
          v => !!v || 'Answer the problem, silly!'
        ],
        productAnswer: null,
        multiplicandVar: 0,
        multiplierVar: 0,
        
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
        "createNewProblem",
        "incrementScore"
      ]),
      submitAnswer() {
        if (this.productAnswer == this.product) {
          this.incrementScore();
          this.createNewProblem();
        } else {
          this.createNewProblem();
        }
      },
    }
  }
</script>

<style lang="stylus" scoped>
.home {
  padding-top: 60px;
}
</style>