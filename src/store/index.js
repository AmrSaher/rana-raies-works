import { createStore } from "vuex";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";

export default createStore({
  state: {
    works: [],
    myList: [],
    continueWatchingList: [],
  },
  getters: {
    works(state) {
      return state.works;
    },
    myList(state) {
      return state.myList;
    },
    continueWatchingList(state) {
      return state.continueWatchingList;
    },
  },
  mutations: {
    works(state, value) {
      state.works = value;
    },
    myList(state, value) {
      state.myList = value;
    },
    continueWatchingList(state, value) {
      state.continueWatchingList.push(value);
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
      this.dispatch("getContinueWatchingList");
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
    getContinueWatchingList() {
      let epsoides = (
        JSON.parse(localStorage.getItem("continuelist")) || []
      ).reverse();
      epsoides.forEach(async (epsoide) => {
        let workId = epsoide.split("|")[0];
        let seasonId = epsoide.split("|")[1];
        let epsoideIndex = epsoide.split("|")[2];
        const workRef = doc(db, "works", workId);
        const workSnap = await getDoc(workRef);
        const seasonRef = doc(db, "seasons", seasonId);
        const seasonSnap = await getDoc(seasonRef);
        this.commit("continueWatchingList", {
          name:
            workSnap.data().name +
            " " +
            seasonSnap.data().name +
            " الحلقة " +
            epsoideIndex,
          img: workSnap.data().avatar,
          link: "/watch/" + seasonId + "/" + epsoideIndex,
        });
      });
    },
  },
  modules: {},
});
