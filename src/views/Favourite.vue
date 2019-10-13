<template>
  <div class="about">
    <h1>Fvourite item</h1>
    <div class="grid" v-for="item in $store.state.favourite">
      <div class="singleEl">
        <h2>{{item.name}}</h2>
        <img :src="item.img_url" alt>
        <p>{{item.tagline}}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
}

.singleEl {
  height: 70px;
  padding: 10px;
  border: 2px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
}

img {
  height: 60px;
  max-width: 100%;
  order: 1;
}

h2 {
  order: 2;
}

p {
  order: 3;
}
</style>

