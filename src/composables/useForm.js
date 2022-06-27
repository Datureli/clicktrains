/* eslint-disable */
import { reactive, toRefs, computed, ref } from "vue";
let description = ref("");
export function useForm() {
  const state = reactive({
    errors: [],
    descriptionMaxLength: 255,
    vatInput: "",
    vatOptions: [19, 21, 23, 25],
  });

  const validateForm = computed(() => {
    if (!description.value) {
      return "Text is required";
    }
    if (description.value.length == 255) {
      return "You cant enter more than 255 characters";
    }
  });

  return { description,  validateForm, ...toRefs(state) };
}
