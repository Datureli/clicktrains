/* eslint-disable */
import { reactive, toRefs, computed, ref } from "vue";
import { useRouter, useRoute } from 'vue-router'
let description = ref([]);
export function useForm() {

  const router = useRouter()
  const route = useRoute()

  const state = reactive({
    errors: "Text is required",
    descriptionMaxLength: 255,
    vatInput: "",
    vatOptions: [19, 21, 23, 25],
    nettoPrice: "",
    radioButton: "",
    disabled: false,
    isFormSubmitted: false,
    successStatus: false,
  });

  const validateForm = computed(() => {
    if (!description.value) {
      return "Text is required";
    }
    if (description.value.length == 255) {
      return "You cant enter more than 255 characters";
    }
  });

  const returnSuccessStatus = computed(() => {
    return state.successStatus
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
    return state.nettoPrice + calculateNetto;
  });

  let submitForm = ref((event) => {
    state.isFormSubmitted = true
    state.successStatus = true
    if (typeof state.nettoPrice !== "number") {
      return event.preventDefault()
    } 
    if (description.value.length == 0) {
      return event.preventDefault()
    }
    if (description.value.length == 255) {
      return event.preventDefault()
    }
    if (state.radioButton == '') {
      return event.preventDefault()
    }
    router.push('/success')
  })

  return {
    validateNettoPrice,
    returnSuccessStatus,
    changeDisable,
    isDisabled,
    submitForm,
    calculateVat,
    description,
    validateForm,
    ...toRefs(state),
  };
}
