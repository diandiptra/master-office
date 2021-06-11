<template>
  <div>
    <!-- <input type="text" name="search" id="seacrh" v-model="enterSearch" /> -->
    <select name="search" id="search" v-model="enterSearch">
      <option value="activated">Active</option>
      <option value="deactive">Not Active</option>
    </select>
    &nbsp;
    <button @click="searchSubmit">Search</button>
  </div>
  <section>
    <ul>
      <the-user-list
        v-for="user in users"
        :key="user.id"
        :id="user.id"
        :code="user.code"
        :name="user.name"
        :desc="user.description"
        :active="user.active"
      ></the-user-list>
    </ul>
  </section>
</template>

<script>
import TheUserList from "../components/users/TheUsersList.vue";
import { APIPATH_MASTEROFFICE } from "../api/api-paths";
import { fnGET } from "../api/api-methods";

export default {
  name: "UserList",
  data() {
    return {
      users: [],
      enterSearch: "activated",
    };
  },
  components: {
    TheUserList,
  },
  methods: {
    searchSubmit() {
      if (this.enterSearch === null || this.enterSearch === "") {
        alert("Please anter a value!");
      } else {
        fnGET(
          APIPATH_MASTEROFFICE.listUser + "?search=" + this.enterSearch
        ).then((rsp) => {
          this.users = rsp.data;
          console.log(
            APIPATH_MASTEROFFICE.listUser + "?search=" + this.enterSearch
          );
        });
      }
    },
  },
  mounted() {
    fnGET(APIPATH_MASTEROFFICE.listUser).then((rsp) => {
      this.users = rsp.data;
      if (!this.users) {
        alert("Data Kosong");
      }
    });
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