<template>
   <div class="successStatus" >
      <p>Congratulations!</p>
    </div>
</template>

<script>
import { useForm } from "../composables/useForm";
export default {
  setup() {
    let {returnSuccessStatus, submitForm, ...toRefs } = useForm();

    return {
      returnSuccessStatus,
      submitForm,
      ...toRefs,
    };
  },
};
</script>
<style>
.successStatus {
  width: 200px;
  height: 200px;
  color: rgb(255, 255, 255);
  background: rgb(71, 167, 71);
  border: 2px solid rgb(0, 128, 0);
  text-align: center;
  justify-content: center;
  margin: 150px auto;
}
</style>
