import { messagesOnSnapshot, addMessage } from "@/firebase/messages";
import moment from "moment";

const state = {
  messages: [],
};

const mutations = {
  SET_MESSAGE(state, { message }) {
    state.messages.push(message);
  },
};

const actions = {
  async get({ commit }) {
    await messagesOnSnapshot((id, doc) => {
      const message = {
        id: id,
        name: doc.name,
        message: doc.message,
        timestamp: moment(doc.timestamp).format("LTS"),
      };

      commit("SET_MESSAGE", { message });
    });
  },
  async send({ commit }, message) {
    console.log(message)
    await addMessage(message.message)
  }
};

const getters = {
  all: (state) => {
    return state.messages;
  },
};

export default { namespaced: true, state, mutations, actions, getters };
