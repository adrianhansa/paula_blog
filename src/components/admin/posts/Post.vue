<template>
  <div class="container">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">{{ post.title }}</span>
        <p>{{post.content|preview(50)}}</p>
      </div>
      <div class="card-action">
        <a href="#">Edit</a>
        <a href="#">Archive</a>
        <a href="#" @click.prevent="togglePublish">{{ post.published ? 'Unpublish':'Publish' }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  methods: {
    togglePublish() {
      this.post.published = !this.post.unpublish;
    }
  }
};
</script>