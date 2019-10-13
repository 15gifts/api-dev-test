<template>
  <div class="home">
    <button @click="callApi">TAKE A BEER</button>
    <List></List>
  </div>
</template>

<script>
import axios from "axios";
import List from "../components/List";

export default {
  name: "home",
  data() {
    return {
      alreadyClicked: false
    };
  },
  components: { List },
  methods: {
    callApi() {
      //call api just once
      if (this.alreadyClicked == false) {
        axios.get("https://api.punkapi.com/v2/beers").then(dataCollection => {
          //dispatch action to store
          this.$store.dispatch("saveResults", dataCollection.data);
          this.alreadyClicked = true;
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
button {
  margin-top: 20px;
}
</style>

