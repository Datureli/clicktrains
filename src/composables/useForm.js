/* eslint-disable */
import { reactive, toRefs, computed,ref } from "vue";
let description = ref("");
export function useForm() {
  const state = reactive({
    errors: [],
    descriptionMaxLength: 255,
    vatInput: "",
    vatOptions: [19, 21, 23, 25],
  });

  const descriptionLength = computed(() => {
    if (description.value) {
      return description.value.length;
    }
    return "";
  });

  const validateForm = computed(() => {
   description ? "dsadsad" : "Text is required";
   description.length > 255 ? "dsa" : "dsda"
  });

  return {description, descriptionLength, validateForm, ...toRefs(state) };
}
