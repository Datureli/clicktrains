import { computed, ref } from "vue";
let description = ref([]);
let descriptionMaxLength = 255;
export function useDescription() {
  const validateDescription = computed(() => {
    if (!description.value) {
      return "Text is required";
    }
    if (description.value.length == 255) {
      return "You cant enter more than 255 characters";
    }
  });

  const calculateDescriptionLength = computed(() => {
    let remainingLength = descriptionMaxLength - description.value.length;
    return `${remainingLength} / ${descriptionMaxLength}`;
  });

  return {
    description,
    descriptionMaxLength,
    validateDescription,
    calculateDescriptionLength,
  };
}
