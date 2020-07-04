<template>
  <div>
    <h1>Posts management</h1>
    <div v-if="user">{{ user.email }}</div>
    <ul v-if="posts">
      <li v-for="post in posts" :key="post.id">{{ post }}</li>
    </ul>
    <p v-else>No posts</p>
  </div>
</template>

<script>
import { auth } from "@/firebase/init";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["posts"])
  },
  data() {
    return {
      user: null
    };
  },
  created() {
    if (auth.currentUser) {
      this.user = auth.currentUser;
    }
  }
};
</script>