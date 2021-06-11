<template>
  <div class="product">
    <div class="product__text">
      <h3>Add New User</h3>
    </div>
    <div class="product__data">
      <form @submit.prevent="addNewUsers">
        <div class="form-control" :class="{ invalid: codeValid === 'invalid' }">
          <label for="code">Code </label>
          <input
            type="text"
            name="code"
            id="code"
            v-model.trim="enterCode"
            @blur="validateInput"
          />
          <p v-if="codeValid === 'invalid'">Please enter a code!</p>
        </div>
        <div class="form-control" :class="{ invalid: nameValid === 'invalid' }">
          <label for="name">Name </label>
          <input
            type="text"
            name="name"
            id="name"
            v-model.trim="enterName"
            @blur="validateInput"
          />
          <p v-if="nameValid === 'invalid'">Please enter a name!</p>
        </div>
        <div class="form-control" :class="{ invalid: descValid === 'invalid' }">
          <label for="desc">Descriptions </label>
          <textarea
            name="desc"
            id="desc"
            rows="3"
            v-model.trim="enterDesc"
            @blur="validateInput"
          ></textarea>
          <p v-if="descValid === 'invalid'">Please enter description!</p>
        </div>
        <div class="product__actions">
          <button>Add User</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { APIPATH_MASTEROFFICE } from "../../api/api-paths";
import { fnPOST } from "../../api/api-methods";

export default {
  name: "AddUsers",
  data() {
    return {
      enterCode: "",
      enterName: "",
      enterDesc: "",
      codeValid: "pending",
      nameValid: "pending",
      descValid: "pending",
    };
  },
  methods: {
    validateInput() {
      if (
        this.enterCode === "" &&
        this.enterName === "" &&
        this.enterDesc === ""
      ) {
        this.codeValid = "invalid";
        this.nameValid = "invalid";
        this.descValid = "invalid";
      } else if (this.enterCode === "") {
        this.codeValid = "invalid";
      } else if (this.enterName === "") {
        this.nameValid = "invalid";
      } else if (this.enterDesc === "") {
        this.descValid = "invalid";
      } else {
        this.codeValid = "valid";
        this.nameValid = "valid";
        this.descValid = "valid";
      }
    },
    addNewUsers() {
      this.validateInput();
      fnPOST(APIPATH_MASTEROFFICE.listUser, {
        code: this.enterCode,
        name: this.enterName,
        description: this.enterDesc,
      }).then((rsp) => {
        console.log(rsp);
      });
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input,
.form-control.invalid textarea {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}

.product__text h3 {
  margin: 0 0 0.5rem 0;
  text-align: center;
}

input[type="text"],
textarea {
  display: block;
  width: 38rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.product {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}

.product__actions {
  text-align: center;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
  color: white;
  border: 1px solid #45006d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  margin-right: 1rem;
  margin-top: 1rem;
}

button:hover,
button:active {
  background-color: #760ab4;
  border-color: #760ab4;
}
</style>