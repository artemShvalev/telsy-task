<template>
  <div>
    <div class="nav__list">
    <ul  v-for="users in user" :key="users.i">
      <li>Имя: {{ users.firstName }}</li>
      <li>Фамилия: {{ users.lastName }}</li>
      <li>ID: {{ users.id }}</li>
    </ul>
        <button  class="btn"  name="my-first-modal"  @click="showModal=true">
          Добавить пользователя
        </button>
    </div>
        <Modal v-model="showModal" title="Добавление нового пользователя">
          <div class="container">
            <div id="app" class="form">
              <label>Имя</label>
              <input type="text" v-model="user.firstName" placeholder=" имя"/>
              <label>Фамилия</label>
              <input type="text" v-model="user.lastName" placeholder=" фамилия"/>
              <label>ID</label>
              <input type="number" v-model="user.id" min="18" required placeholder=" ID"/>
              </div>
            </div>
          <button @click.prevent="addUser">Добавить нового пользователя</button>
        </Modal>
      </div>
</template>

<script>
export default {
  name: 'EnterUsers',
  data() {
    return {
      showModal: false,
      user: [
        {
          firstName: 'Иван Петрович',
          lastName: 'Гоголь',
          id: 1,
        },
      ],
    };
  },
  methods: {
    addUser() {
      /* Добавление нового пользовыателя */
      this.user.push({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        id: this.user.id,
      });
      /* Очищаем форму */
      this.user.firstName = '';
      this.user.lastName = '';
      this.user.id = '';
    },
  },
};
</script>

<style  lang=scss>
  @import '../assets/Sass/main.scss';

</style>
