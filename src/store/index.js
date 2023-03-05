import { createStore } from "vuex";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export default createStore({
  state: {
    works: [],
  },
  getters: {
    works(state) {
      return state.works;
    },
  },
  mutations: {
    works(state, value) {
      state.works = value;
    },
  },
  actions: {
    async getWorks() {
      const querySnapshot = await getDocs(collection(db, "works"));
      let works = [];
      querySnapshot.forEach((doc) => {
        works.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      this.commit("works", works);
    },
  },
  modules: {},
});
