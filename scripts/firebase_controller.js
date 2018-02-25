(function startFirebase() {
	// Initialize Firebase
	const config = {
		apiKey: firebase_config.API_KEY,
		authDomain: firebase_config.AUTH_DOMAIN,
		databaseURL: firebase_config.DB_URL,
		projectId: firebase_config.PJT_ID,
		storageBucket: firebase_config.STORAGE_BUCKET,
		messagingSenderId: firebase_config.MSG_SENDER_ID
	};
	firebase.initializeApp(config);
})();

function writeData(word, url) {
  firebase.database().ref().push().set({
    word: word,
    url: url
  });
}
