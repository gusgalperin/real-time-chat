<template>
  <div class="container">
    <div class="card login">
      <div class="card-body">
        <h2 class="card-title text-center">Login</h2>

        <form @submit.prevent="login" class="text-center">
          <div class="form-group">
            <input type="text" name="name" v-model="name" class="form-control" placeholder="Ingrese su nombre">
            <p v-if="errorText" class="text-danger">{{ errorText }}</p>
          </div>
          <p></p>
          <button type="submit" class="btn btn-primary">Entrar al chat</button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return {
      name: "",
      errorText: null
    }
  },
  methods: {
    async login() {
      if(this.name) {
        await this.$router.push({name: 'Chat', params: {name: this.name}})
      }
      else{
        this.errorText = "primero ingrese un nombre"
      }
    }
  }
}
</script>

<style scoped>
  .login{
    max-width: 450px;
    margin-top: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>