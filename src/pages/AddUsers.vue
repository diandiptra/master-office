<template>
  <section>
    <ul>
      <the-add-users></the-add-users>
    </ul>
  </section>
</template>

<script>
import TheAddUsers from "../components/users/TheAddUsers.vue";

export default {
  components: {
    TheAddUsers,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>