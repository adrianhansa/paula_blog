<template>
  <div>
    <nav>
      <div class="nav-wrapper indigo">
        <a href="#" class="brand-logo">Logo</a>
        <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large">
          <i class="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <div v-if="!user">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link :to="{name: 'register'}">Register</router-link>
            </li>
            <li>
              <router-link :to="{name: 'login'}">Login</router-link>
            </li>
          </div>
          <div v-else>
            <li>
              <router-link :to="{name: 'postsManagement'}">Manage posts</router-link>
            </li>
            <li>
              <a href="#" @click.prevent="logout">Logout</a>
            </li>
          </div>
          <li>
            <a class="btn-floating btn-large waves-effect halfway-fab waves-light pink">
              <i class="material-icons">add</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <Sidebar />
  </div>
</template>

<script>
import { auth } from "@/firebase/init";
import M from "materialize-css";
import Sidebar from "@/components/layout/Sidebar";
export default {
  components: { Sidebar },
  data() {
    return {
      user: null
    };
  },
  methods: {
    logout() {
      auth
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push({ name: "login" });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    M.Sidenav.init(document.querySelector("#slide-out"), {});
    auth.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      }
      console.log(user);
    });
  }
};
</script>