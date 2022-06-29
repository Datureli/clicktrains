<template>
  <div class="form">
    <h1>Calculator Netto</h1>
    <form
      action="https://formsubmit.co/soleris1@gmail.com"
      method="POST"
      @submit="submitForm"
    >
      <div style="display: grid">
        <label for="Choose Vat">Choose Vat</label>
        <select v-model="vatInput" @change="changeDisable" name="Vat">
          <option
            v-for="vatOptions in vatOptions"
            :key="vatOptions"
            :value="vatOptions"
          >
            {{ vatOptions + "%" }}
          </option>
        </select>
        <p class="errors" v-if="!vatInput && isFormSubmitted">{{ errors }}</p>
      </div>

  

      <div style="display: grid">
        <label for="price Netto EUR">Price Netto EUR</label>
        <input
          v-model="nettoPrice"
          placeholder="Netto price"
          type="number"
          :disabled="isDisabled"
          name="netto"
        />
        <p class="errors" v-if="!nettoPrice && isFormSubmitted">{{ errors }}</p>
        <p class="errors" v-if="isFormSubmitted">{{ validateNettoPrice }}</p>
      </div>

      <div style="display: grid">
        <label for="price Brutto EUR">Price Brutto EUR</label>
        <input
          placeholder="Brutto price"
          type="number"
          :value="calculateVat"
          disabled
          name="brutto"
        />
      </div>

      <div style="display: grid">
        <div style="display: flex">
          <label>Description</label>
          <p>
            {{ descriptionMaxLength - description.length }} /
            {{ descriptionMaxLength }}
          </p>
        </div>

        <textarea
          maxlength="255"
          v-model="description"
          type="text"
          name="description"
        >
        </textarea>
        <p class="errors">{{ validateForm }}</p>
      </div>
          <div style="display: grid">
        <label for="Send confirmation">Send Confirmation</label>
        <div style="display: flex; margin-left: 70px">
          <div style="display: flex">
            <input
              class="radioButton"
              v-model="radioButton"
              type="radio"
              name="confirmation"
            />
            <label for="yes">Yes</label>
            <input class="radioButton" type="radio" name="confirmation" />
            <label for="no">No</label>
          </div>
        </div>
        <p class="errors" v-if="!radioButton && isFormSubmitted">
          {{ errors }}
        </p>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { useForm } from "../composables/useForm";
export default {
  setup() {
    let {
      validateNettoPrice,
      changeDisable,
      isDisabled,
      errors,
      submitForm,
      calculateVat,
      description,
      validateForm,
      ...toRefs
    } = useForm();

    return {
      validateNettoPrice,
      changeDisable,
      isDisabled,
      errors,
      submitForm,
      calculateVat,
      description,
      validateForm,
      ...toRefs,
    };
  },
};
</script>
<style>
.form {
  width: 500px;
  height: 500px;
  margin: auto;
  padding: 20px 10px;
  display: grid;
  justify-content: center;
  text-align: center;
  box-shadow: -2px 0px 20px -9px rgb(71, 76, 136);
}
form {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 40px 50px 30px 60px 20px 40px;
  grid-gap: 35px;
}
textarea {
  height: 50px;
  resize: none;
  border-radius: 4px;
}

.errors {
  color: #ff0000;
  font-weight: 700;
}
label {
  font-size: 13px;
  font-weight: 800;
}

input,
select {
  border-radius: 4px;
  outline: none;
  background: none;
  border: none;
  border-bottom: 2px solid #b9acac;
}

button {
  width: 100px;
  justify-content: center;
  margin: auto;
  background-color: #8294b9;
  border: 2px solid #8294b9;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
}
p {
  margin-left: 10px;
  font-size: 5px;
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
</style>
