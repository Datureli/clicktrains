<template>
  <div class="displayGrid">
    <div style="display: flex">
      <label>Description</label>
      <p>
        {{ calculateDescriptionLength }}
      </p>
    </div>

    <textarea
      maxlength="255"
      v-model="description"
      type="text"
      name="description"
    >
    </textarea>
    <p class="errors">
      {{ validateDescription }}
    </p>
    <p class="errors" v-if="description !== null">
      {{ errors }}
    </p>
  </div>
</template>

<script>
import { useDescription } from "@/composables/useDescription";
export default {
  setup() {
    let {
      description,
      descriptionMaxLength,
      validateDescription,
      calculateDescriptionLength,
    } = useDescription();

    return {
      calculateDescriptionLength,
      description,
      validateDescription,
      descriptionMaxLength,
    };
  },
};
</script>

<style scoped>
textarea {
  height: 50px;
  resize: none;
  border-radius: 4px;
}
label {
  margin-left: 60px;
}
</style>
