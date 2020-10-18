<template>
  <div>
    <ul class="nav">
      <li class="btn btn-primary btn-nav">
        <router-link to="/" exact>Accueil</router-link>
      </li>
      <li class="btn btn-primary btn-nav">
        <router-link to="/about">About</router-link>
      </li>
      <li class="btn btn-primary btn-nav">
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.router-link-active {
  text-decoration: underline;
}
.btn-nav {
  margin: 5px;
}
.btn-nav a {
  color: wheat;
}
.btn-nav a :hover {
  color: #fff;
}
</style>
