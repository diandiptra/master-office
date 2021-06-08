<template>
  <section>
    <ul>
      <the-user-list
        v-for="user in users"
        :key="user.id"
        :id="user.id"
        :code="user.code"
        :name="user.name"
        :desc="user.description"
      ></the-user-list>
    </ul>
  </section>
</template>

<script>
// import axios from "axios";
import TheUserList from "../components/users/TheUsersList.vue";

export default {
  components: {
    TheUserList,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    // this.$store.dispatch("getUsers");
    this.$store.dispatch("prods/getUsers");
  },
  // methods: {
  //   usersList() {
  //     axios
  //       .get("http://localhost:8000/userview/masteroffice/")
  //       .then((response) => {
  //         console.log(response);
  //       });
  //   },
  // },
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