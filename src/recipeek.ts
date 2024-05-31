import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const ReciPeekTheme: CustomThemeConfig = {
    name: 'recipeek-theme',
    properties: {
        // =~= Theme Properties =~=
        '--theme-font-family-base': `system-ui`,
        '--theme-font-family-heading': `system-ui`,
        '--theme-font-color-base': '0 0 0',
        '--theme-font-color-dark': '255 255 255',
        '--theme-rounded-base': '9999px',
        '--theme-rounded-container': '8px',
        '--theme-border-base': '1px',
        // =~= Theme On-X Colors =~=
        '--on-primary': '255 255 255',
        '--on-secondary': '255 255 255',
        '--on-tertiary': '0 0 0',
        '--on-success': '0 0 0',
        '--on-warning': '0 0 0',
        '--on-error': '255 255 255',
        '--on-surface': '0 0 0',
        // =~= Theme Colors  =~=
        // primary | #c02020
        '--color-primary-50': '246 222 222', // #f6dede
        '--color-primary-100': '242 210 210', // #f2d2d2
        '--color-primary-200': '239 199 199', // #efc7c7
        '--color-primary-300': '230 166 166', // #e6a6a6
        '--color-primary-400': '211 99 99', // #d36363
        '--color-primary-500': '192 32 32', // #c02020
        '--color-primary-600': '173 29 29', // #ad1d1d
        '--color-primary-700': '144 24 24', // #901818
        '--color-primary-800': '115 19 19', // #731313
        '--color-primary-900': '94 16 16', // #5e1010
        // secondary | #600404
        '--color-secondary-50': '231 217 217', // #e7d9d9
        '--color-secondary-100': '223 205 205', // #dfcdcd
        '--color-secondary-200': '215 192 192', // #d7c0c0
        '--color-secondary-300': '191 155 155', // #bf9b9b
        '--color-secondary-400': '144 79 79', // #904f4f
        '--color-secondary-500': '96 4 4', // #600404
        '--color-secondary-600': '86 4 4', // #560404
        '--color-secondary-700': '72 3 3', // #480303
        '--color-secondary-800': '58 2 2', // #3a0202
        '--color-secondary-900': '47 2 2', // #2f0202
        // tertiary | #ffa010
        '--color-tertiary-50': '255 241 219', // #fff1db
        '--color-tertiary-100': '255 236 207', // #ffeccf
        '--color-tertiary-200': '255 231 195', // #ffe7c3
        '--color-tertiary-300': '255 217 159', // #ffd99f
        '--color-tertiary-400': '255 189 88', // #ffbd58
        '--color-tertiary-500': '255 160 16', // #ffa010
        '--color-tertiary-600': '230 144 14', // #e6900e
        '--color-tertiary-700': '191 120 12', // #bf780c
        '--color-tertiary-800': '153 96 10', // #99600a
        '--color-tertiary-900': '125 78 8', // #7d4e08
        // success | #84cc16
        '--color-success-50': '237 247 220', // #edf7dc
        '--color-success-100': '230 245 208', // #e6f5d0
        '--color-success-200': '224 242 197', // #e0f2c5
        '--color-success-300': '206 235 162', // #ceeba2
        '--color-success-400': '169 219 92', // #a9db5c
        '--color-success-500': '132 204 22', // #84cc16
        '--color-success-600': '119 184 20', // #77b814
        '--color-success-700': '99 153 17', // #639911
        '--color-success-800': '79 122 13', // #4f7a0d
        '--color-success-900': '65 100 11', // #41640b
        // warning | #e7ac08
        '--color-warning-50': '251 243 218', // #fbf3da
        '--color-warning-100': '250 238 206', // #faeece
        '--color-warning-200': '249 234 193', // #f9eac1
        '--color-warning-300': '245 222 156', // #f5de9c
        '--color-warning-400': '238 197 82', // #eec552
        '--color-warning-500': '231 172 8', // #e7ac08
        '--color-warning-600': '208 155 7', // #d09b07
        '--color-warning-700': '173 129 6', // #ad8106
        '--color-warning-800': '139 103 5', // #8b6705
        '--color-warning-900': '113 84 4', // #715404
        // error | #d21919
        '--color-error-50': '248 221 221', // #f8dddd
        '--color-error-100': '246 209 209', // #f6d1d1
        '--color-error-200': '244 198 198', // #f4c6c6
        '--color-error-300': '237 163 163', // #eda3a3
        '--color-error-400': '224 94 94', // #e05e5e
        '--color-error-500': '210 25 25', // #d21919
        '--color-error-600': '189 23 23', // #bd1717
        '--color-error-700': '158 19 19', // #9e1313
        '--color-error-800': '126 15 15', // #7e0f0f
        '--color-error-900': '103 12 12', // #670c0c
        // surface | #fff0f0
        '--color-surface-50': '255 253 253', // #fffdfd
        '--color-surface-100': '255 252 252', // #fffcfc
        '--color-surface-200': '255 251 251', // #fffbfb
        '--color-surface-300': '255 249 249', // #fff9f9
        '--color-surface-400': '255 245 245', // #fff5f5
        '--color-surface-500': '255 240 240', // #fff0f0
        '--color-surface-600': '230 216 216', // #e6d8d8
        '--color-surface-700': '191 180 180', // #bfb4b4
        '--color-surface-800': '153 144 144', // #999090
        '--color-surface-900': '125 118 118', // #7d7676
    },
};

export const ReciPeekTheme2: CustomThemeConfig = {
    name: 'recipeek-theme2',
    properties: {
        // =~= Theme Properties =~=
        '--theme-font-family-base': `system-ui`,
        '--theme-font-family-heading': `system-ui`,
        '--theme-font-color-base': '0 0 0',
        '--theme-font-color-dark': '255 255 255',
        '--theme-rounded-base': '12px',
        '--theme-rounded-container': '8px',
        '--theme-border-base': '1px',
        // =~= Theme On-X Colors =~=
        '--on-primary': '255 255 255',
        '--on-secondary': '255 255 255',
        '--on-tertiary': '0 0 0',
        '--on-success': '0 0 0',
        '--on-warning': '0 0 0',
        '--on-error': '255 255 255',
        '--on-surface': '0 0 0',
        // =~= Theme Colors  =~=
        // primary | #c02020
        '--color-primary-50': '246 222 222', // #f6dede
        '--color-primary-100': '242 210 210', // #f2d2d2
        '--color-primary-200': '239 199 199', // #efc7c7
        '--color-primary-300': '230 166 166', // #e6a6a6
        '--color-primary-400': '211 99 99', // #d36363
        '--color-primary-500': '192 32 32', // #c02020
        '--color-primary-600': '173 29 29', // #ad1d1d
        '--color-primary-700': '144 24 24', // #901818
        '--color-primary-800': '115 19 19', // #731313
        '--color-primary-900': '94 16 16', // #5e1010
        // secondary | #600404
        '--color-secondary-50': '231 217 217', // #e7d9d9
        '--color-secondary-100': '223 205 205', // #dfcdcd
        '--color-secondary-200': '215 192 192', // #d7c0c0
        '--color-secondary-300': '191 155 155', // #bf9b9b
        '--color-secondary-400': '144 79 79', // #904f4f
        '--color-secondary-500': '96 4 4', // #600404
        '--color-secondary-600': '86 4 4', // #560404
        '--color-secondary-700': '72 3 3', // #480303
        '--color-secondary-800': '58 2 2', // #3a0202
        '--color-secondary-900': '47 2 2', // #2f0202
        // tertiary | #ffa010
        '--color-tertiary-50': '255 241 219', // #fff1db
        '--color-tertiary-100': '255 236 207', // #ffeccf
        '--color-tertiary-200': '255 231 195', // #ffe7c3
        '--color-tertiary-300': '255 217 159', // #ffd99f
        '--color-tertiary-400': '255 189 88', // #ffbd58
        '--color-tertiary-500': '255 160 16', // #ffa010
        '--color-tertiary-600': '230 144 14', // #e6900e
        '--color-tertiary-700': '191 120 12', // #bf780c
        '--color-tertiary-800': '153 96 10', // #99600a
        '--color-tertiary-900': '125 78 8', // #7d4e08
        // success | #84cc16
        '--color-success-50': '237 247 220', // #edf7dc
        '--color-success-100': '230 245 208', // #e6f5d0
        '--color-success-200': '224 242 197', // #e0f2c5
        '--color-success-300': '206 235 162', // #ceeba2
        '--color-success-400': '169 219 92', // #a9db5c
        '--color-success-500': '132 204 22', // #84cc16
        '--color-success-600': '119 184 20', // #77b814
        '--color-success-700': '99 153 17', // #639911
        '--color-success-800': '79 122 13', // #4f7a0d
        '--color-success-900': '65 100 11', // #41640b
        // warning | #e7ac08
        '--color-warning-50': '251 243 218', // #fbf3da
        '--color-warning-100': '250 238 206', // #faeece
        '--color-warning-200': '249 234 193', // #f9eac1
        '--color-warning-300': '245 222 156', // #f5de9c
        '--color-warning-400': '238 197 82', // #eec552
        '--color-warning-500': '231 172 8', // #e7ac08
        '--color-warning-600': '208 155 7', // #d09b07
        '--color-warning-700': '173 129 6', // #ad8106
        '--color-warning-800': '139 103 5', // #8b6705
        '--color-warning-900': '113 84 4', // #715404
        // error | #d21919
        '--color-error-50': '248 221 221', // #f8dddd
        '--color-error-100': '246 209 209', // #f6d1d1
        '--color-error-200': '244 198 198', // #f4c6c6
        '--color-error-300': '237 163 163', // #eda3a3
        '--color-error-400': '224 94 94', // #e05e5e
        '--color-error-500': '210 25 25', // #d21919
        '--color-error-600': '189 23 23', // #bd1717
        '--color-error-700': '158 19 19', // #9e1313
        '--color-error-800': '126 15 15', // #7e0f0f
        '--color-error-900': '103 12 12', // #670c0c
        // surface | #2d1717 
		"--color-surface-50": "224 220 220", // #e0dcdc
		"--color-surface-100": "213 209 209", // #d5d1d1
		"--color-surface-200": "203 197 197", // #cbc5c5
		"--color-surface-300": "171 162 162", // #aba2a2
		"--color-surface-400": "108 93 93", // #6c5d5d
		"--color-surface-500": "45 23 23", // #2d1717
		"--color-surface-600": "41 21 21", // #291515
		"--color-surface-700": "34 17 17", // #221111
		"--color-surface-800": "27 14 14", // #1b0e0e
		"--color-surface-900": "22 11 11", // #160b0b
    },
};

export const SepiaTheme: CustomThemeConfig = {
    name: 'sepia-theme',
    properties: {
        // =~= Theme Properties =~=
        '--theme-font-family-base': `system-ui`,
        '--theme-font-family-heading': `system-ui`,
        '--theme-font-color-base': '0 0 0',
        '--theme-font-color-dark': '255 255 255',
        '--theme-rounded-base': '12px',
        '--theme-rounded-container': '8px',
        '--theme-border-base': '1px',
        // =~= Theme On-X Colors =~=
        '--on-primary': '0 0 0',
        '--on-secondary': '0 0 0',
        '--on-tertiary': '0 0 0',
        '--on-success': '0 0 0',
        '--on-warning': '255 255 255',
        '--on-error': '255 255 255',
        '--on-surface': '0 0 0',
        // =~= Theme Colors  =~=
        // primary | #f4a065
        '--color-primary-50': '253 241 232', // #fdf1e8
        '--color-primary-100': '253 236 224', // #fdece0
        '--color-primary-200': '252 231 217', // #fce7d9
        '--color-primary-300': '251 217 193', // #fbd9c1
        '--color-primary-400': '247 189 147', // #f7bd93
        '--color-primary-500': '244 160 101', // #f4a065
        '--color-primary-600': '220 144 91', // #dc905b
        '--color-primary-700': '183 120 76', // #b7784c
        '--color-primary-800': '146 96 61', // #92603d
        '--color-primary-900': '120 78 49', // #784e31
        // secondary | #e0c45d
        '--color-secondary-50': '250 246 231', // #faf6e7
        '--color-secondary-100': '249 243 223', // #f9f3df
        '--color-secondary-200': '247 240 215', // #f7f0d7
        '--color-secondary-300': '243 231 190', // #f3e7be
        '--color-secondary-400': '233 214 142', // #e9d68e
        '--color-secondary-500': '224 196 93', // #e0c45d
        '--color-secondary-600': '202 176 84', // #cab054
        '--color-secondary-700': '168 147 70', // #a89346
        '--color-secondary-800': '134 118 56', // #867638
        '--color-secondary-900': '110 96 46', // #6e602e
        // tertiary | #c96e70
        '--color-tertiary-50': '247 233 234', // #f7e9ea
        '--color-tertiary-100': '244 226 226', // #f4e2e2
        '--color-tertiary-200': '242 219 219', // #f2dbdb
        '--color-tertiary-300': '233 197 198', // #e9c5c6
        '--color-tertiary-400': '217 154 155', // #d99a9b
        '--color-tertiary-500': '201 110 112', // #c96e70
        '--color-tertiary-600': '181 99 101', // #b56365
        '--color-tertiary-700': '151 83 84', // #975354
        '--color-tertiary-800': '121 66 67', // #794243
        '--color-tertiary-900': '98 54 55', // #623637
        // success | #c5cb79
        '--color-success-50': '246 247 235', // #f6f7eb
        '--color-success-100': '243 245 228', // #f3f5e4
        '--color-success-200': '241 242 222', // #f1f2de
        '--color-success-300': '232 234 201', // #e8eac9
        '--color-success-400': '214 219 161', // #d6dba1
        '--color-success-500': '197 203 121', // #c5cb79
        '--color-success-600': '177 183 109', // #b1b76d
        '--color-success-700': '148 152 91', // #94985b
        '--color-success-800': '118 122 73', // #767a49
        '--color-success-900': '97 99 59', // #61633b
        // warning | #667b60
        '--color-warning-50': '232 235 231', // #e8ebe7
        '--color-warning-100': '224 229 223', // #e0e5df
        '--color-warning-200': '217 222 215', // #d9ded7
        '--color-warning-300': '194 202 191', // #c2cabf
        '--color-warning-400': '148 163 144', // #94a390
        '--color-warning-500': '102 123 96', // #667b60
        '--color-warning-600': '92 111 86', // #5c6f56
        '--color-warning-700': '77 92 72', // #4d5c48
        '--color-warning-800': '61 74 58', // #3d4a3a
        '--color-warning-900': '50 60 47', // #323c2f
        // error | #35493a
        '--color-error-50': '225 228 225', // #e1e4e1
        '--color-error-100': '215 219 216', // #d7dbd8
        '--color-error-200': '205 210 206', // #cdd2ce
        '--color-error-300': '174 182 176', // #aeb6b0
        '--color-error-400': '114 128 117', // #728075
        '--color-error-500': '53 73 58', // #35493a
        '--color-error-600': '48 66 52', // #304234
        '--color-error-700': '40 55 44', // #28372c
        '--color-error-800': '32 44 35', // #202c23
        '--color-error-900': '26 36 28', // #1a241c
        // surface | #c98312
        '--color-surface-50': '247 236 219', // #f7ecdb
        '--color-surface-100': '244 230 208', // #f4e6d0
        '--color-surface-200': '242 224 196', // #f2e0c4
        '--color-surface-300': '233 205 160', // #e9cda0
        '--color-surface-400': '217 168 89', // #d9a859
        '--color-surface-500': '201 131 18', // #c98312
        '--color-surface-600': '181 118 16', // #b57610
        '--color-surface-700': '151 98 14', // #97620e
        '--color-surface-800': '121 79 11', // #794f0b
        '--color-surface-900': '98 64 9', // #624009
    },
};

export const material: CustomThemeConfig = {
    name: 'material',
    properties: {
        // =~= Theme Properties =~=
        '--theme-font-family-base': `system-ui`,
        '--theme-font-family-heading': `system-ui`,
        '--theme-font-color-base': '0 0 0',
        '--theme-font-color-dark': '255 255 255',
        '--theme-rounded-base': '8px',
        '--theme-rounded-container': '12px',
        '--theme-border-base': '1px',
        // =~= Theme On-X Colors =~=
        '--on-primary': '255 255 255',
        '--on-secondary': '255 255 255',
        '--on-tertiary': '255 255 255',
        '--on-success': '255 255 255',
        '--on-warning': '255 255 255',
        '--on-error': '255 255 255',
        '--on-surface': '255 255 255',
        // =~= Theme Colors  =~=
        // primary | #0480ff
        '--color-primary-50': '217 236 255', // #d9ecff
        '--color-primary-100': '205 230 255', // #cde6ff
        '--color-primary-200': '192 223 255', // #c0dfff
        '--color-primary-300': '155 204 255', // #9bccff
        '--color-primary-400': '79 166 255', // #4fa6ff
        '--color-primary-500': '4 128 255', // #0480ff
        '--color-primary-600': '4 115 230', // #0473e6
        '--color-primary-700': '3 96 191', // #0360bf
        '--color-primary-800': '2 77 153', // #024d99
        '--color-primary-900': '2 63 125', // #023f7d
        // secondary | #9c27af
        '--color-secondary-50': '240 223 243', // #f0dff3
        '--color-secondary-100': '235 212 239', // #ebd4ef
        '--color-secondary-200': '230 201 235', // #e6c9eb
        '--color-secondary-300': '215 169 223', // #d7a9df
        '--color-secondary-400': '186 104 199', // #ba68c7
        '--color-secondary-500': '156 39 175', // #9c27af
        '--color-secondary-600': '140 35 158', // #8c239e
        '--color-secondary-700': '117 29 131', // #751d83
        '--color-secondary-800': '94 23 105', // #5e1769
        '--color-secondary-900': '76 19 86', // #4c1356
        // tertiary | #d5b800
        '--color-tertiary-50': '249 244 217', // #f9f4d9
        '--color-tertiary-100': '247 241 204', // #f7f1cc
        '--color-tertiary-200': '245 237 191', // #f5edbf
        '--color-tertiary-300': '238 227 153', // #eee399
        '--color-tertiary-400': '226 205 77', // #e2cd4d
        '--color-tertiary-500': '213 184 0', // #d5b800
        '--color-tertiary-600': '192 166 0', // #c0a600
        '--color-tertiary-700': '160 138 0', // #a08a00
        '--color-tertiary-800': '128 110 0', // #806e00
        '--color-tertiary-900': '104 90 0', // #685a00
        // success | #2d7c31
        '--color-success-50': '224 235 224', // #e0ebe0
        '--color-success-100': '213 229 214', // #d5e5d6
        '--color-success-200': '203 222 204', // #cbdecc
        '--color-success-300': '171 203 173', // #abcbad
        '--color-success-400': '108 163 111', // #6ca36f
        '--color-success-500': '45 124 49', // #2d7c31
        '--color-success-600': '41 112 44', // #29702c
        '--color-success-700': '34 93 37', // #225d25
        '--color-success-800': '27 74 29', // #1b4a1d
        '--color-success-900': '22 61 24', // #163d18
        // warning | #ec6c01
        '--color-warning-50': '252 233 217', // #fce9d9
        '--color-warning-100': '251 226 204', // #fbe2cc
        '--color-warning-200': '250 218 192', // #fadac0
        '--color-warning-300': '247 196 153', // #f7c499
        '--color-warning-400': '242 152 77', // #f2984d
        '--color-warning-500': '236 108 1', // #ec6c01
        '--color-warning-600': '212 97 1', // #d46101
        '--color-warning-700': '177 81 1', // #b15101
        '--color-warning-800': '142 65 1', // #8e4101
        '--color-warning-900': '116 53 0', // #743500
        // error | #d32e2e
        '--color-error-50': '248 224 224', // #f8e0e0
        '--color-error-100': '246 213 213', // #f6d5d5
        '--color-error-200': '244 203 203', // #f4cbcb
        '--color-error-300': '237 171 171', // #edabab
        '--color-error-400': '224 109 109', // #e06d6d
        '--color-error-500': '211 46 46', // #d32e2e
        '--color-error-600': '190 41 41', // #be2929
        '--color-error-700': '158 35 35', // #9e2323
        '--color-error-800': '127 28 28', // #7f1c1c
        '--color-error-900': '103 23 23', // #671717
        // surface | #ffffff
        '--color-surface-50': Array(3).fill('255').join(' '),
        '--color-surface-100': Array(3).fill('250').join(' '),
        '--color-surface-200': Array(3).fill('228').join(' '),
        '--color-surface-300': Array(3).fill('165').join(' '),
        '--color-surface-400': Array(3).fill('143').join(' '),
        '--color-surface-500': Array(3).fill('112').join(' '),
        '--color-surface-600': Array(3).fill('87').join(' '),
        '--color-surface-700': Array(3).fill('64').join(' '),
        '--color-surface-800': Array(3).fill('32').join(' '),
        '--color-surface-900': Array(3).fill('27').join(' '),
    },
};
