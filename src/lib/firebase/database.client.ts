import { db } from '$lib/firebase/firebase.client';
import type { User } from 'firebase/auth';
import { ref, set } from 'firebase/database';

export async function initUserData(user: User) {
    await set(ref(db, `users/${user.uid}`), {
        inventory: {},
        subscriptions: {},
        customRecipes: {},
        notifications: {},
    });

    // TODO: Remove this?
    await set(ref(db, `users/${user.uid}/inventory`), {
        egg: 100,
        butter: 100,
        garlic: 100,
        onion: 100,
        sugar: 100,
    });
}
