import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import { sessionStore } from '$lib/store/session';

export async function load({ parent }) {
    await parent();
    const { loggedIn } = get(sessionStore);
    if (!loggedIn) goto('/auth/login');
}
