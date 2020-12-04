<template>
  <div>
    <div class="container">
      <div id="app" class="form">
        <label>Имя</label>
        <input type="text" v-model="firstName" placeholder=" имя"/><br>
        <label>Фамилия</label>
        <input type="text" v-model="lastName" placeholder=" фамилия"/><br>
        <label>Возраст</label>
        <input type="number" v-model="age" min="18" required placeholder=" возраст"/><br>
        <label>Дата регистрации</label><br>
        <input type="date" v-model="date" placeholder="дата"/>
        <button  class="btn" @click="addUser()">
          Добавить пользователя
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnterUsers',
  data() {
    return {
      firstName: '',
      lastName: '',
      age: '',
      date: '',
    };
  },
  methods: {
    addUser(firstName, lastName, age, date) {
      firstName = this.addUser;
      lastName = this.addUser;
      age = this.addUser;
      date = this.addUser;
    },
  },
};
</script>

<style scoped lang=scss>

</style>
