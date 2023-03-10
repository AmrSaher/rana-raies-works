import { createStore } from "vuex";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export default createStore({
  state: {
    works: [],
    myList: [],
  },
  getters: {
    works(state) {
      return state.works;
    },
    myList(state) {
      return state.myList;
    },
  },
  mutations: {
    works(state, value) {
      state.works = value;
    },
    myList(state, value) {
      state.myList = value;
    },
  },
  actions: {
    async getWorks() {
      const querySnapshot = await getDocs(collection(db, "works"));
      let works = [];
      querySnapshot.forEach((doc) => {
        works.push({
          id: doc.id,
          link: "/work/" + doc.id,
          ...doc.data(),
        });
      });
      this.commit("works", works);
      this.dispatch("getMyList");
    },
    getMyList() {
      let ids = JSON.parse(localStorage.getItem("mylist")) || [];
      this.commit(
        "myList",
        this.getters.works.filter((work) => {
          if (ids.includes(work.id)) return true;
        })
      );
    },
  },
  modules: {},
});
