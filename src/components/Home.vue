<template>
  <v-container>
    <v-row class="home">
      <v-row>
        <v-flex>
          Home component
        </v-flex>
      </v-row>
      <v-col>
        <v-flex xs12>
          <v-select
            :items="numbers"
            v-model="multiplicand"
            label="Multiplicand"
            @change="handleProduct()"
          >
          </v-select>
        </v-flex>
        <v-flex xs12>
          <v-select
            :items="numbers"
            v-model="multiplier"
            label="Multiplier"
            @change="handleProduct()"
          >
          </v-select>
        </v-flex>
        
      </v-col>
      <v-col column>
        <v-flex>
          {{ multiplicand }}
        </v-flex>
        <v-flex>
          {{ multiplier }}
        </v-flex>
        <v-flex>
          -------
        </v-flex>
        <v-flex>
          {{ product }} {{ Math.floor(Math.random() * Math.floor(12)) }}
        </v-flex>
      </v-col>
      
    </v-row>
   


    <!-- Choose Options -->



    <!-- Start Program -->
  </v-container>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        multiplicand: 0,
        product: this.handleProduct(),
        multiplier: 0,
      }
    },
    methods: {
      handleProduct() {
        this.product = this.multiplicand * this.multiplier;
      }
    }
  }
</script>

<style lang="stylus" scoped>
.home {
  padding-top: 60px;
}
</style>