<template>
  <div class="home form">
    <form>
      <p>{{descriptionMaxLength - description.length }} / {{descriptionMaxLength}}</p>
         <div class="error" v-if="error">
        {{ error }}
      </div>
      <p>
        <label for="name">Description</label>
        <textarea id="name" v-model="description" type="text" name="name" />
      </p>
    </form>
  </div>
</template>

<script>
import { useForm } from "../composables/useForm";
export default {
  setup() {
    let {description, descriptionLength, validateForm, ...toRefs } = useForm();

    return {
      description,
      descriptionLength,
      validateForm,
      ...toRefs,
    };
  },
};
</script>
<style>
.form {
  width: 500px;
  height: 300px;
  margin: auto;
  padding: 20px 30px;
  display: grid;
  justify-content: center;
  text-align: center;
  box-shadow: -2px 0px 24px -9px rgba(66, 68, 90, 1);
}

.radioButton {
  display: flex;
}
.errors {
  display: block;
  text-align: center;
  color: red;
  font-weight: 700;
}
label {
  display: inline-block;
  font-size: 15px;
  font-weight: 800;
}
select {
  width: 275px;
  border: 2px solid #b9acac;
  border-radius: 4px;
  display: block;
  font-size: 14px;
  padding: 10px;
}

button {
  background-color: #8294b9;
  border: 2px solid #8294b9;
  border-radius: 6px;
  height: 50px;
  display: block;
  font-size: 20px;
  cursor: pointer;
  transition: 0.8s;
}
p {
  display: grid;
  margin: auto;
  font-size: 15px;
}
.successStatus {
  display: grid;
  width: 200px;
  height: 200px;
  color: rgb(255, 255, 255);
  background: rgb(71, 167, 71);
  border: 2px solid rgb(0, 128, 0);
  text-align: center;
  justify-content: center;
  border-radius: 50%;
  margin: 150px auto;
}
.successStatusParagraph {
  font-size: 25px;
}
</style>
