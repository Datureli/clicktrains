import { reactive, toRefs } from "vue";
export function useForm() {
  const state = reactive({
    errors: [],
    description: null,
    vatInput: "",
    vatOptions: [19, 21, 23, 25],
    movie: null,
  });

  const validateForm = () => {
    state.description ? true : 'Text is required'
  };

  return {validateForm, ...toRefs(state) };
}
