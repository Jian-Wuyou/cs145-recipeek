import { auth, db } from '$lib/firebase/firebase.client';
import type { NotificationList } from '$lib/models';
import { get as dbGet, onValue, ref, update } from 'firebase/database';
import { get, writable } from 'svelte/store';

export function initStore() {
    const notificationsStore = writable<NotificationList>({});
    const { subscribe, set } = notificationsStore;
    const user = auth.currentUser;

    const notificationsRef = ref(db, `users/${user?.uid}/notifications`);
    onValue(notificationsRef, snapshot => {
        const snapshotData: NotificationList = snapshot.exists() ? snapshot.val() : {};
        set(snapshotData);
    });

    const dismiss = (id: string) =>
        notificationsStore.update(notifications => {
            let { [id]: _, ...rest } = notifications;
            return rest;
        });

    const confirm = async (id: string, itemName: string) => {
        const itemRef = ref(db, `users/${user?.uid}/inventory/${itemName}`);
        const dataSnapshot = await dbGet(itemRef);
        const oldAmount = dataSnapshot.exists() ? dataSnapshot.val() : 0;
        update(itemRef, oldAmount + get(notificationsStore)[id].amount);
        dismiss(id);
    };

    return {
        subscribe,
        dismiss,
        confirm,
        set,
    };
}

export type Store = ReturnType<typeof initStore>;
