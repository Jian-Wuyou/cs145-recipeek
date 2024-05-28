import { auth, db } from '$lib/firebase/firebase.client';
import type { NotificationList } from '$lib/models';
import { onValue, ref, remove, child } from 'firebase/database';
import { get, writable } from 'svelte/store';
import { getPantryStore } from '$lib/store/userContext';

export function initStore() {
    const notificationsStore = writable<NotificationList>({});
    const pantryStore = getPantryStore();
    const { subscribe, set } = notificationsStore;
    const user = auth.currentUser;

    const notificationsRef = ref(db, `users/${user?.uid}/notifications`);
    onValue(notificationsRef, snapshot => {
        const snapshotData: NotificationList = snapshot.exists() ? snapshot.val() : {};
        set(snapshotData);
    });

    const dismiss = (id: string) => {
        notificationsStore.update(notifications => {
            let { [id]: _, ...rest } = notifications;
            return rest;
        });
        remove(child(notificationsRef, id));
    };

    const confirm = async (id: string, itemName: string) => {
        pantryStore.add(itemName, get(notificationsStore)[id].amount);
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
