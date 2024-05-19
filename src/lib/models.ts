import { type Output, boolean, email, nullish, object, string } from 'valibot';

export const Session = object({
    loggedIn: boolean(),
    username: nullish(string()),
    email: nullish(string([email()])),
    uid: nullish(string()),
});
export type Session = Output<typeof Session>;
