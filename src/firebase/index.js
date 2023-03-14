import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging, onMessage } from "firebase/messaging";
import { Notyf } from "notyf";
import router from "@/router";
import "notyf/notyf.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyDsXGXjVq_6sL3EGNV5hx7-jcCrwtaW2Wc",
  authDomain: "rana-raies-works-c2ad9.firebaseapp.com",
  projectId: "rana-raies-works-c2ad9",
  storageBucket: "rana-raies-works-c2ad9.appspot.com",
  messagingSenderId: "463762649679",
  appId: "1:463762649679:web:309db8d238f169c99cf03a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const messaging = getMessaging();

onMessage(messaging, (payload) => {
  const notyf = new Notyf({
    duration: 100000,
  });
  const notification = notyf.success(payload.notification.body);
  notification.on("click", () => {
    router.push("/work/" + payload.data.workId);
  });
});

export { db };
