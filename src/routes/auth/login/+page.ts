import { goto } from '$app/navigation';
import { sessionStore } from '$lib/store/session';
import { get } from 'svelte/store';

export async function load({ parent }) {
    await parent();
    const { loggedIn } = get(sessionStore);
    if (loggedIn) goto('/user/dashboard');
}
