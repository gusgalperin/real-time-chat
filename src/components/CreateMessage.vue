<template>
  <div class="container" style="margin-bottom: 30px">
    <form @submit.prevent="createMessage">
      <div class="form-group">
        <input
          type="text"
          name="message"
          class="form-control"
          placeholder="Ingrese mensaje..."
          v-model="newMessage"
        />
        <p class="text-danger" v-if="errorText">{{ errorText }}</p>
        <p></p>
        <button class="btn btn-primary" type="submit" name="action">
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      errorText: null,
    };
  },
  methods: {
    async createMessage() {
      if (this.newMessage) {
        const message = {
          message: this.newMessage,
          name: this.name,
          timestamp: Date.now(),
        }

        await this.$store.dispatch('messages/send',  { message })

        this.newMessage = null;
        this.errorText = null;
      }
      else {
        this.errorText = "primero ingrese el mensaje";
      }
    }
  }
};
</script>

<style scoped></style>
