<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
:root {
  --primary-font: "SF Pro Display", sans-serif;
  --secondary-font: "Inter", sans-serif;
  --grey-primary: #262628;
  --grey-secondary: #424242;
  --charcoal-color: #e6e6e6;
  --regular-grey: #c6c6c8;
  --mid-grey: #9e9e9e;
  --red-color: #fc4848;
  --dark-red-color: #b20000;
  --light-green-color: rgba(153, 209, 107, 0.82);
  --opal-blue-color: rgba(32, 110, 172, 0.6);
  --label-grey-color: rgba(60, 60, 67, 0.6);
  --bg-grey-color: #fafafa;
  --bg-light-grey-color: #f5f6fa;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
