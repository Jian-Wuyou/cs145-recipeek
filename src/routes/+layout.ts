import { auth, initializeFirebase } from '$lib/firebase/firebase.client';
import { sessionStore } from '$lib/store/session';
import { onAuthStateChanged } from 'firebase/auth';

export const prerender = true;
export const ssr = false;
export const trailingSlash = 'always';

export async function load() {
    try {
        initializeFirebase();
    } catch (error) {
        throw new Error('Failed to initialize Firebase');
    }

    function getAuthUser() {
        return new Promise(resolve => {
            onAuthStateChanged(auth, user => {
                if (!user) sessionStore.clear();
                else sessionStore.create(user);
                resolve(true);
            });
        });
    }

    await getAuthUser();
}
