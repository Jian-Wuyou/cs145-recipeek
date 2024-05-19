import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '$lib/firebase/firebase.client';
import { session } from '$lib/store/session';

export async function loginWithMail(email: string, password: string) {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        session.create(user);
    } catch (error) {
        throw new Error('Failed to login user');
    }
}

// Note: we are enabling session here
export async function registerWithMail(username: string, email: string, password: string) {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, { displayName: username });
        // TODO: Initialize user data
        session.create(user);
    } catch (error) {
        throw new Error('Failed to register user');
    }
}

export async function signOutUser() {
    try {
        await auth.signOut();
        session.clear();
    } catch (error) {
        throw new Error('Failed to sign out user');
    }
}