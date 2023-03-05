import { createStore } from "vuex";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
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
      this.dispatch("getFile", this.getters.works[0].trailer);
    },
    getFile({ state }, location) {
      getDownloadURL(ref(storage, location)).then((url) => {
        this.commit("heroTrailer", url);
      });
    },
  },
  modules: {},
});
