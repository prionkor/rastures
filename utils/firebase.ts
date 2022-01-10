// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDreUsbU19Pc_4uNkLfNQhH49J3K3CMc9g',
	authDomain: 'restaurant-reservation-ssr.firebaseapp.com',
	projectId: 'restaurant-reservation-ssr',
	storageBucket: 'restaurant-reservation-ssr.appspot.com',
	messagingSenderId: '287980632640',
	appId: '1:287980632640:web:ff44d2980d974ed32fbda5',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
