import { writable } from 'svelte/store';

const initStore = () => {
    // initialize internal writable store with empty list
    const { subscribe, set, update } = writable<string[]>([]);

    // mark message as read by removing it from the list
    const dismiss = (message: string) => update(messages => messages.filter(mess => mess !== message));

    // add new message to the top of the list
    const add = (message: string) => update(messages => [message, ...messages]);

    return {
        subscribe,
        add,
        init: set, // alias set method to init
        dismiss,
        clear: () => set([]),
    };
};

// initialize the store
type Store = ReturnType<typeof initStore>;
export const notifications: Store = initStore();
