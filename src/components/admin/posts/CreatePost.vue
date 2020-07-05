<template>
  <div>Create Post</div>
</template>

<script>
import { db, auth } from "@/firebase/init";
export default {
  data() {
    return {
      post: {
        title: null,
        content: null,
        published: false,
        created_at: Date.now(),
        updated_at: Date.now(),
        author_id: auth.currentUser.uid
      }
    };
  },
  methods: {
    savePost() {
      db.collections("posts")
        .add(this.post)
        .then(() => {
          this.$router.push({ name: "postsManagement" });
        })
        .chatch(error => console.log(error));
    }
  }
};
</script>