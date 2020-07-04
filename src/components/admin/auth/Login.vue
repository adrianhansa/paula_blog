<template>
  <div class="row">
    <div class="col s4 offset-s4 mt-4">
      <form @submit.prevent="register">
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <div class="row">
                <div class="input-field col s12">
                  <input id="email" type="email" class="validate" v-model="email" />
                  <label for="email">Email</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="password" type="password" class="validate" v-model="password" />
                  <label for="password">Password</label>
                </div>
              </div>
            </div>
            <div class="card-action">
              <button type="submit" class="btn purple">Login</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase/init";
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    register() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "postsManagement" });
        })
        .catch(function(error) {
          console.log(error.code);
          console.log(error.Message);
        });
    }
  }
};
</script>