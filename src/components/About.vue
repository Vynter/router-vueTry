<template>
  <div class="About">
    <h1>About</h1>
    <div v-on:click="goDebut" class="btn btn-warning">Retour au début</div>
    <ul>
      <li v-for="(article, index) in AllArticles" :key="index">
        <div class="card p-2 m-2">
          <!-- <router-link v-bind:to="`/PostBlog/${article.id}`"> cela marche aussi-->
          <router-link v-bind:to="`/PostBlog/${index + 1}`">
            <h3>{{ article.id }} - {{ article.title }}</h3></router-link
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "About",
  data() {
    return { AllArticles: [] };
  },
  methods: {
    goDebut: function() {
      console.log(this.$route.path);
      this.$router.push("/");
    },
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      /*for (const article of response.data) {
        this.AllArticles.push(article);
      }*/

      for (const article in response.data) {
        // console.log(response.data[article]);
        this.AllArticles.push(response.data[article]);
      }
    });
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
