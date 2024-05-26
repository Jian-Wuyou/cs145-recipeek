import { FIREBASE_PRIVATE_KEY, FIREBASE_DATABASE_URL } from '$env/static/private';
import { cert, initializeApp, type App } from 'firebase-admin/app';
import { getAuth, type Auth } from 'firebase-admin/auth';
import { getDatabase, type Database } from 'firebase-admin/database';

export let app: App = initializeApp({
    credential: cert(JSON.parse(FIREBASE_PRIVATE_KEY)),
    databaseURL: FIREBASE_DATABASE_URL,
});
export let auth: Auth = getAuth(app);
export let db: Database = getDatabase(app);
