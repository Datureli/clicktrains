/* eslint-disable */
import { reactive, toRefs, computed, ref } from "vue";
let description = ref([]);
export function useForm() {
  
  const state = reactive({
    errors: "Text is required",
    descriptionMaxLength: 255,
    vatInput: "",
    vatOptions: [19, 21, 23, 25],
    nettoPrice: "",
    radioButton: "",
    disabled: false,
    isFormSubmitted: false,
  });

  const validateForm = computed(() => {
    if (!description.value) {
      return "Text is required";
    }
    if (description.value.length == 255) {
      return "You cant enter more than 255 characters";
    }
  });

  const validateVatInput = computed(() => {
    return state.vatInput > 0 ? "Text is required" : "";
  });

  const isDisabled = computed(() => {
    return state.disabled === false;
  })
  const changeDisable = ref(() => {
    state.disabled = true;
  })

  let calculateVat = computed(() => {
    let calculateNetto = (state.nettoPrice / 100) * state.vatInput;
    return state.nettoPrice + calculateNetto;
  });

  let submitForm = ref(() => {
    state.isFormSubmitted = true

  });

  return {
    changeDisable,
    isDisabled,
    submitForm,
    validateVatInput,
    calculateVat,
    description,
    validateForm,
    ...toRefs(state),
  };
}
