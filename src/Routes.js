import Acceuil from "./components/Acceuil.vue";
import Contact from "./components/Contact.vue";
import About from "./components/About.vue";
import Post from "./components/Post.vue";

export default [
  { path: "/", component: Acceuil },
  { path: "/contact", component: Contact },
  { path: "/about", component: About },
  { path: "/PostBlog/:id", component: Post },
];
