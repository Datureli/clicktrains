<template>
  <form
    action="https://formsubmit.co/soleris1@gmail.com"
    method="POST"
    target="_blank"
    @submit="submitForm"
  >
    <div class="displayGrid">
      <label for="Choose Vat">Vat</label>
      <select v-model="vatInput" @change="changeDisable" name="Vat">
        <option value="" disabled>Choose VAT</option>
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

    <div class="displayGrid">
      <label for="price Netto EUR">Price Netto EUR</label>
      <input
        v-model="nettoPrice"
        min="1"
        type="number"
        step="any"
        :disabled="isDisabled"
        name="netto"
      />
      <div style="display: flex">
        <p class="errors" v-if="!nettoPrice && isFormSubmitted">
          {{ errors && isFormSubmitted ? errors + "," : "" }}
        </p>
        <p class="errors" v-if="isFormSubmitted">{{ validateNettoPrice }}</p>
      </div>
    </div>

    <div class="displayGrid">
      <label for="price Brutto EUR">Price Brutto EUR</label>
      <input type="number" :value="calculateVat" readonly name="brutto" />
    </div>
    <Description />

    <div class="displayGrid">
      <label for="Send confirmation">Send Confirmation</label>
      <div style="display: flex; margin-left: 70px">
        <div style="display: flex">
          <input
            v-model="radioButton"
            type="radio"
            value="yes"
            name="confirmation"
          />
          <label for="yes">Yes</label>
          <input
            v-model="radioButton"
            type="radio"
            value="no"
            name="confirmation"
          />
          <label for="no">No</label>
        </div>
      </div>
      <p class="errors" v-if="!radioButton && isFormSubmitted">
        {{ errors }}
      </p>
    </div>
    <Button />
  </form>
</template>

<script>
import { useForm } from "../composables/useForm";
import Description from "../components/parts/Description";
import Button from "../components/parts/Button.vue";
export default {
  components: {
    Description,
    Button,
  },
  setup() {
    let {
      validateNettoPrice,
      changeDisable,
      isDisabled,
      submitForm,
      calculateVat,
      ...toRefs
    } = useForm();

    return {
      validateNettoPrice,
      changeDisable,
      isDisabled,
      submitForm,
      calculateVat,
      ...toRefs,
    };
  },
};
</script>
<style>
form {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 40px 50px 30px 60px 20px 40px;
  grid-gap: 35px;
}

.displayGrid {
  display: grid;
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

p {
  margin-left: 10px;
  font-size: 5px;
}
</style>
