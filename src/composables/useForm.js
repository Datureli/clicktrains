/* eslint-disable */
import { reactive, toRefs, computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
let description = ref([]);
export function useForm() {

  const router = useRouter();
  const route = useRoute();

  const state = reactive({
    errors: "Text is required",
    descriptionMaxLength: 255,
    vatOptions: [19, 21, 23, 25],
    vatInput: "",
    nettoPrice: "",
    radioButton: "",
    disabled: false,
    isFormSubmitted: false,
    successStatus: false,
  });

  const validateDescription = computed(() => {
    if (!description.value) {
      return "Text is required";
    }
    if (description.value.length == 255) {
      return "You cant enter more than 255 characters";
    }
    else if (state.isFormSubmitted && !description.value) {
      return "Text is required";
    }
  });

  const calculateDescriptionLength = computed(() => {
    let remainingLength = state.descriptionMaxLength - description.value.length
    return `${remainingLength} / ${state.descriptionMaxLength}`
  })

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
    return state.nettoPrice + calculateNetto
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
    calculateDescriptionLength,
    validateNettoPrice,
    changeDisable,
    isDisabled,
    submitForm,
    calculateVat,
    description,
    validateDescription,
    ...toRefs(state),
  };
}
