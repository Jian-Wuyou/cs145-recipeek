/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    console.log(`Handle: ${JSON.stringify(event.cookies)}`);
    // event.locals.user = event.cookies.get('sessionid');

    const response = await resolve(event);
    // response.headers.set('x-custom-header', 'potato');

    return response;
}
