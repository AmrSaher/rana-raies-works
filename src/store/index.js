import { createStore } from "vuex";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { storage } from "@/firebase";
import { ref, getDownloadURL } from "firebase/storage";

export default createStore({
  state: {
    works: [],
    heroTrailer: "",
  },
  getters: {
    works(state) {
      return state.works;
    },
    heroTrailer(state) {
      return state.heroTrailer;
    },
  },
  mutations: {
    works(state, value) {
      state.works = value;
    },
    heroTrailer(state, value) {
      state.heroTrailer = value;
    },
  },
  actions: {
    async getWorks({ state }) {
      const querySnapshot = await getDocs(collection(db, "works"));
      querySnapshot.forEach((doc) => {
        state.works.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      this.dispatch("getFile", state.works[0].trailer);
    },
    getFile({ state }, location) {
      getDownloadURL(ref(storage, location)).then((url) => {
        state.heroTrailer = url;
      });
    },
  },
  modules: {},
});
