import { ingredients2 } from '$lib/data/ingredients';
import { auth, db } from '$lib/firebase/firebase.client';
import type { Inventory, Stock } from '$lib/models';
import { child, remove as dbRemove, update as dbUpdate, onValue, ref } from 'firebase/database';
import { get, writable } from 'svelte/store';

export function initStore() {
    const pantryStore = writable<Stock>({});
    const { subscribe, update, set } = pantryStore;

    let loaded = false;
    const user = auth.currentUser;
    const inventoryRef = ref(db, `users/${user?.uid}/inventory`);
    onValue(inventoryRef, snapshot => {
        const snapshotData: Inventory = snapshot.exists() ? snapshot.val() : {};
        const snapshotStock: Stock = {};
        for (const [k, v] of Object.entries(snapshotData)) {
            if (!ingredients2.hasOwnProperty(k)) continue;
            snapshotStock[k] = {
                category: ingredients2[k].category,
                available: v,
            };
        }
        set(snapshotStock);
        loaded = true;
    });

    const add = (itemName: string, amount: number) => {
        const oldAmount = get(pantryStore).hasOwnProperty(itemName) ? get(pantryStore)[itemName].available : 0;
        update(n => {
            if (!n.hasOwnProperty(itemName)) n[itemName] = { category: ingredients2[itemName].category, available: 0 };
            n[itemName].available += amount;
            return n;
        });
        dbUpdate(inventoryRef, { [itemName]: amount + oldAmount });
        if (amount + oldAmount > 2.5) dbUpdate(inventoryRef, { [itemName]: amount + oldAmount });
        else remove(itemName);
    };

    const edit = (itemName: string, amount: number) => {
        update(n => {
            if (!n.hasOwnProperty(itemName)) n[itemName] = { category: ingredients2[itemName].category, available: 0 };
            n[itemName].available = amount;
            return n;
        });
        dbUpdate(inventoryRef, { [itemName]: amount });
    };

    const remove = (itemName: string) => {
        update(n => {
            if (n.hasOwnProperty(itemName)) delete n[itemName];
            return n;
        });
        dbRemove(child(inventoryRef, itemName));
    };

    function isLoaded() {
        return loaded;
    }

    return {
        subscribe,
        add,
        edit,
        remove,
        set,
        isLoaded,
    };
}

export type Store = ReturnType<typeof initStore>;
