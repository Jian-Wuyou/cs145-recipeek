<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
    import { NavBar } from '$lib/components';
</script>

<div class="flex h-full flex-wrap">
    <div class="h-min basis-full">
        <NavBar>
            <a href="/auth/login"><button class="variant-filled btn flex w-32 text-center">Login</button></a>
        </NavBar>
    </div>

    <div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <h1
            class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
        >
            ReciPeek
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
            No more "What's for Dinner?" - Find recipes fast!
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
                href="/user/pantry"
                class="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
                Get started!
            </a>
        </div>
    </div>
</div>
