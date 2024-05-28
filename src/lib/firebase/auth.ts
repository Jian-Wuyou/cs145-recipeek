import { initUserData } from '$lib/firebase/database.client';
import { auth } from '$lib/firebase/firebase.client';
import { sessionStore } from '$lib/store/session';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

export async function loginWithMail(email: string, password: string) {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        sessionStore.create(user);
    } catch (error) {
        throw new Error('Failed to login user');
    }
}

// Note: we are enabling session here
export async function registerWithMail(username: string, email: string, password: string) {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, { displayName: username });
        initUserData(user);
        sessionStore.create(user);
    } catch (error) {
        throw new Error('Failed to register user');
    }
}

export async function signOutUser() {
    try {
        await auth.signOut();
        sessionStore.clear();
    } catch (error) {
        throw new Error('Failed to sign out user');
    }
}
