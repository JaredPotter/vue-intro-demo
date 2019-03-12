<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/twoWayBinding">2 - Way Binding</router-link> |
      <router-link to="/computedProperties">Computed Properties & Filters</router-link> |
      <router-link to="/vuex">Vuex</router-link> |
      <router-link to="/todo">ToDo List</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link-exact-active {
  /* background: gray; */
  color: red;
}
</style>
