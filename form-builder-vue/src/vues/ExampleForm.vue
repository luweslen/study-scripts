<template>
  <div class="form-example">
    <t-input-text type="text" label="label" placeholder="Nome"></t-input-text
    ><t-input-select
      type="select"
      :options="genderOptions"
      label="Gênero"
    ></t-input-select
    ><t-input-text type="text"></t-input-text>
  </div>
</template>
<script>
  export default {
    name: 'ExampleFormForm',
    data() {
      return { genderOptions: ['masculino', 'feminino'] };
    },
  };
</script>
