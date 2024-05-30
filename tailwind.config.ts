import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { ReciPeekTheme, ReciPeekTheme2, SepiaTheme, material } from './src/recipeek';

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
    ],
    theme: {
        extend: {},
    },
    plugins: [
        forms,
        typography,
        skeleton({
            themes: {
                preset: [
                    {
                        name: 'skeleton',
                        enhancements: true,
                    },
                ],
                custom: [ReciPeekTheme, ReciPeekTheme2, SepiaTheme, material],
            },
        }),
    ],
} satisfies Config;
