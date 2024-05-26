import { db } from '$lib/firebase/firebase.server';
import { type Notification } from '$lib/models';
import { json } from '@sveltejs/kit';
import { serverTimestamp } from 'firebase/database';

type PostFormat = {
    id: string;
    weight: number;
};

/** @type {import('./$types').RequestHandler} */
export async function POST(r) {
    const request: PostFormat = await r.request.json();
    const dataSnapshot = await db.ref(`subscriptions/${request.id}`).get();
    const uidList = dataSnapshot.exists() ? dataSnapshot.val() : {};

    const newNotif: Notification = {
        amount: request.weight,
        time: serverTimestamp(),
        id: request.id,
    };

    for (const uid of Object.keys(uidList)) {
        await db.ref(`users/${uid}/notifications`).push(newNotif);
    }

    return json({ response: 'success' });
}
