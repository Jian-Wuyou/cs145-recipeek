import { type Output, boolean, email, nullish, object, string } from 'valibot';
import { serverTimestamp } from 'firebase/database';

export const Session = object({
    loggedIn: boolean(),
    username: nullish(string()),
    email: nullish(string([email()])),
    uid: nullish(string()),
});
export type Session = Output<typeof Session>;

export type Inventory = { [name: string]: number };

export type Notification = { amount: number; time: number; id: string };
export type NotificationList = { [id: string]: Notification };

export type Subscriptions = { [id: string]: boolean };
