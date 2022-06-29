<template>
  <div>
    <div class="formContainer" v-if="!successStatus">
      <h1>Calculator Netto</h1>
      <Form />
    </div>
  </div>
</template>

<script>
import Form from "../components/Form";
export default {
  components: {
    Form,
  },
};
</script>
<style>
.formContainer {
  width: 500px;
  height: 500px;
  margin: auto;
  padding: 20px 10px;
  display: grid;
  justify-content: center;
  box-shadow: -2px 0px 20px -9px rgb(71, 76, 136);
}
</style>
