importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDsXGXjVq_6sL3EGNV5hx7-jcCrwtaW2Wc",
  authDomain: "rana-raies-works-c2ad9.firebaseapp.com",
  projectId: "rana-raies-works-c2ad9",
  storageBucket: "rana-raies-works-c2ad9.appspot.com",
  messagingSenderId: "463762649679",
  appId: "1:463762649679:web:309db8d238f169c99cf03a",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
