<template>
  <div class="container chat">
    <h2 class="text-primary text-center">Real-Time Chat</h2>

    <div class="card">
      <div class="card-body">
        <p class="text-secondary nomessages" v-if="messages.length == 0">
          [no hay mensajes todavia!]
        </p>
        <div class="messages" v-chat-scroll="{ always: false, smooth: true }">
          <div v-for="message in messages" :key="message.id">
            <span class="text-info">[{{ message.name }}]:</span>
            <span>{{ message.message }}</span>
            <span class="text-secondary time">{{ message.timestamp }}</span>
          </div>
        </div>
      </div>
      <div class="card-action">
        <CreateMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import CreateMessage from "@/components/CreateMessage";

export default {
  name: "Chat",
  props: ["name"],
  components: {
    CreateMessage,
  },
  data() {
    return {
      messages: [],
    };
  },
  beforeCreate() {
    this.$store.dispatch("messages/get");
  },
  async created() {
    this.messages = this.$store.getters["messages/all"];
    // await messagesOnSnapshot((id, doc) => {
    //   this.messages.push({
    //     id: id,
    //     name: doc.name,
    //     message: doc.message,
    //     timestamp: moment(doc.timestamp).format('LTS')
    //   })
    // })
  },
};
</script>

<style scoped>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 0px;
}

.chat span {
  font-size: 1.2em;
}

.chat .time {
  display: block;
  font-size: 0.7em;
}

.messages {
  max-height: 300px;
  overflow: auto;
  text-align: left;
}
</style>
