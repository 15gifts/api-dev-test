<template>
  <div class="list">
    <div class="filter" v-if="$store.state.searchResult.length > 0">
      <h3>Filter by</h3>

      <select v-model="option">
        <option value="By Name">By Name</option>
        <option value="By Description">By description</option>
      </select>

      <input
        v-if="this.option == 'By Name'"
        type="text"
        v-model="query"
        placeholder="filter by name"
      >
      <input
        v-if="this.option == 'By Description'"
        type="text"
        v-model="queryDescription"
        placeholder="filter by description"
      >
    </div>

    <div class="grid">
      <div class="card" v-for="(item, index) in this.filteredList">
        <div class="general" v-match-heights="{
    el: ['.title', '.description', 'h3']}">
          <h2 class="title">{{item.name}}</h2>
          <div class="image-container">
            <img :src="item.image_url" alt>
          </div>
          <h3>{{item.tagline}}</h3>
          <p class="description">{{item.description}}</p>
          <button @click="favourite(item)">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },

  data() {
    return {
      query: "",
      queryDescription: "",
      option: ""
    };
  },
  methods: {
    favourite(item) {
      const singleItem = {
        name: item.name,
        img_url: item.image_url,
        tagline: item.tagline,
        id: item.id
      };
      this.$store.commit("SET_SAVEONFAVOURITE", singleItem);
    }
  },

  computed: {
    filteredList() {
      //getting array from store
      let list = this.$store.state.searchResult;
      //if search by name
      if (this.query !== "") {
        let filteredArr = list.filter(el => {
          return el.name.toLowerCase().includes(this.query.toLowerCase());
        });
        return filteredArr;
      }
      //if search by description
      if (this.queryDescription !== "") {
        let filteredArr = list.filter(el => {
          return el.description
            .toLowerCase()
            .includes(this.queryDescription.toLowerCase());
        });
        return filteredArr;
      }
      //if don't search
      return this.$store.state.searchResult;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  .image-container {
    max-height: 200px;
  }

  .card {
    border: 2px solid black;
  }
  img {
    max-width: 100%;
    max-height: 200px;
  }

  p {
    text-align: left;
  }
}

select {
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
}

input {
  width: 300px;
  height: 30px;
  margin-bottom: 20px;
}
</style>
