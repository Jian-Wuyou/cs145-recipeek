<script lang="ts">
    import { goto } from '$app/navigation';
    import { Button } from '$lib/components/modules';
    import { loginWithMail } from '$lib/firebase/auth';
    import { Fire } from '@steeze-ui/heroicons';
    import { Icon } from '@steeze-ui/svelte-icon';

    let email: string;
    let password: string;

    async function login() {
        // TODO: Add form validation
        try {
            await loginWithMail(email, password);
            console.log('Login successful.');
            goto('/user/dashboard/');
        } catch (_) {
            console.log('Registration failed.');
        }
    }
</script>

<div class="mx-10 -mt-10 flex h-full flex-col items-center justify-center gap-2">
    <div class="flex justify-center"><a href="/"><Icon class="w-16 stroke-2" src={Fire} /></a></div>
    <div class="text-xl">Sign in to ReciPeek</div>
    <div class="p-4">
        <div class="grid gap-4">
            <input bind:value={email} class="input" type="email" placeholder="Email" />
            <input bind:value={password} class="input" type="password" placeholder="Password" />
        </div>
        <Button width="full" on:click={login}>Login</Button>
    </div>
    <div class="text-xs">New to ReciPeek? <a class="anchor" href="/auth/register">Create an account</a></div>
</div>
