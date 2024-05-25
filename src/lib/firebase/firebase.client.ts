import { type Auth, getAuth } from 'firebase/auth';
import { type FirebaseApp, initializeApp, type FirebaseOptions } from 'firebase/app';
import { type Database, getDatabase } from 'firebase/database';
import { browser } from '$app/environment';

export let app: FirebaseApp;
export let auth: Auth;
export let db: Database;

const firebaseConfig: FirebaseOptions = {
    apiKey: 'AIzaSyBxsS5tTvJY0YHqNML_4SNf7KBkSQ9nOwQ',
    authDomain: 'cs145-recipeek.firebaseapp.com',
    projectId: 'cs145-recipeek',
    storageBucket: 'cs145-recipeek.appspot.com',
    messagingSenderId: '104302774033',
    appId: '1:104302774033:web:3b0a381e2eb5de40f62eb0',
    measurementId: 'G-B6EW08ZWPS',
    databaseURL: 'https://cs145-recipeek-default-rtdb.asia-southeast1.firebasedatabase.app',
};

export function initializeFirebase() {
    if (!browser) return;

    if (!app) {
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        db = getDatabase(app);
    }
}
