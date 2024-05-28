import { assert } from '$lib/functions/assert';
import { hasContext, setContext, getContext } from 'svelte';
import * as Notification from './notifications';
import * as Pantry from './pantry';

const NOTIFICATION = Symbol('notification');

const PANTRY = Symbol('pantry');

export function init() {
    setContext(NOTIFICATION, Notification.initStore());
    setContext(PANTRY, Pantry.initStore());
}

export function getNotificationStore() {
    assert(hasContext(NOTIFICATION), 'Notification store not initialized');
    return getContext<Notification.Store>(NOTIFICATION);
}

export function getPantryStore() {
    assert(hasContext(PANTRY), 'Pantry store not initialized');
    return getContext<Pantry.Store>(PANTRY);
}
