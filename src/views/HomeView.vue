<template>
  <div class="form">
    <form @submit.prevent="isFormSubmitted">
      <div style="display: grid">
        <label for="Choose Vat">Choose Vat</label>
        <select v-model="vatInput" @change="changeDisable">
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
        <label for="Send confirmation">Send Confirmation</label>
        <div style="display: flex; margin-left: 70px">
          <div style="display: flex">
            <input
              class="radioButton"
              v-model="radioButton"
              type="radio"
              name="yesOrNo"
            />
            <label for="yes">Yes</label>
            <input class="radioButton" type="radio" name="yesOrNo" />
            <label for="no">No</label>
          </div>
        </div>
        <p class="errors" v-if="!radioButton && isFormSubmitted">
          {{ errors }}
        </p>
      </div>

      <div style="display: grid">
        <label for="price Netto EUR">Price Netto EUR</label>
        <input
          v-model="nettoPrice"
          placeholder="Netto price"
          type="number"
          :disabled="isDisabled"
        />
        <p class="errors" v-if="!nettoPrice && isFormSubmitted">{{ errors }}</p>
        <p>{{ validateNettoPrice }}</p>
      </div>

      <div style="display: grid">
        <label for="price Brutto EUR">Price Brutto EUR</label>
        <input
          placeholder="Brutto price"
          type="number"
          :value="calculateVat"
          disabled
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

        <textarea maxlength="255" v-model="description" type="text"> </textarea>
        <p class="errors">{{ validateForm }}</p>
      </div>
    </form>
    <button type="submit" @click="submitForm">Submit</button>
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
  height: 400px;
  margin: auto;
  padding: 20px 30px;
  display: grid;
  justify-content: center;
  text-align: center;
  box-shadow: -2px 0px 20px -9px rgba(66, 68, 90, 1);
}
form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 40px 40px 140px 40px;
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
select {
  width: 230px;
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
  transition: 0.4s;
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
