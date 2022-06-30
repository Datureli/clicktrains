/* eslint-disable */
import { reactive, toRefs, computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useDescription } from "./useDescription";
let { description,descriptionMaxLength } = useDescription()
export function useForm() {
  const router = useRouter();
  const route = useRoute();

  const state = reactive({
    errors: "Text is required",
    vatOptions: [19, 21, 23, 25],
    vatInput: "",
    nettoPrice: "",
    radioButton: "",
    disabled: false,
    isFormSubmitted: false,
    successStatus: false,
  });

  const validateNettoPrice = computed(() => {
    if (typeof state.nettoPrice !== "number") {
      return "Please, input number";
    }
  });

  const isDisabled = computed(() => {
    return state.disabled === false;
  });

  const changeDisable = ref(() => {
    state.disabled = true;
  });

  let calculateVat = computed(() => {
    let calculateNetto = (state.nettoPrice / 100) * state.vatInput;
    return state.nettoPrice + calculateNetto;
  });

  let submitForm = ref((event) => {
    state.isFormSubmitted = true;
    state.successStatus = true;
    if (typeof state.nettoPrice !== "number") {
      return event.preventDefault();
    }
    if (description.value.length == 0) {
      return event.preventDefault();
    }
    if (description.value.length == 255) {
      return event.preventDefault();
    }
    if (state.radioButton == "") {
      return event.preventDefault();
    }
    setTimeout(() => router.push("/success"), 3000);
  });

  return {
    validateNettoPrice,
    changeDisable,
    isDisabled,
    submitForm,
    calculateVat,

    ...toRefs(state),
  };
}
