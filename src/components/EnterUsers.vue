<template>
  <div>
    <div class="container">
      <div id="app" class="form">
        <label>Имя</label>
        <input type="text" v-model="firstName" placeholder=" имя"/><br>
        <label>Фамилия</label>
        <input type="text" v-model="lastName" placeholder=" фамилия"/><br>
        <label>ID</label>
        <input type="number" v-model="id" min="18" required placeholder=" ID"/><br>
        <button  class="btn"  name="my-first-modal"  @click="showModal=true">
          Добавить пользователя
        </button>
        <Modal v-model="showModal" title="My first modal">
          <p>Modal content goes here...</p>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnterUsers',
  data() {
    return {
      showModal: false,
      firstName: '',
      lastName: '',
      id: '',
    };
  },
};
</script>

<style scoped lang=scss>

</style>
