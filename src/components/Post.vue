<template>
  <div class="Post">
    <div v-on:click="goDebut" class="btn btn-warning my-3">
      Retour au début
    </div>
    <h1>Le Poste N°{{ id }}</h1>
    <div class="p-4">
      <h2>{{ ArtActuel.title }}</h2>
      <br />
      <p>{{ ArtActuel.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Post",
  data() {
    return {
      id: this.$route.params.id,
      ArtActuel: [],
    };
  },
  methods: {
    goDebut: function() {
      console.log(this.$route.path);
      this.$router.push("/about");
    },
  },
  mounted() {
    /*axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => (this.ArtActuel = response.data[this.id - 1]));
  },*/
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then((response) => {
        this.ArtActuel = response.data;
      });
  },
};
</script>

<style scoped></style>
