<template>
  <div>
    <h1>Posts management</h1>
    <div v-if="user">{{ user.email }}</div>
    <div class="row" v-if="posts">
      <div class="col s12 m6 offset-m3">
        <Post v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
    <p v-else>No posts</p>
  </div>
</template>

<script>
import { auth } from "@/firebase/init";
import { mapGetters } from "vuex";
import Post from "./Post";

export default {
  components: { Post },
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