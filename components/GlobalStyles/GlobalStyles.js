import { createGlobalStyle } from "styled-components";

import { LIGHT_COLORS } from "../../constants.js";

const GlobalStyles = createGlobalStyle`
*,
::before,
::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {
	line-height: 1.15; /* 1 */
	-webkit-text-size-adjust: 100%; /* 2 */
	-moz-tab-size: 4; /* 3 */
	tab-size: 4; /* 3 */
	font-size: 62.5%;
}

body {
	margin: 0; /* 1 */
	font-family:
		system-ui,
		-apple-system,
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji'; /* 2 */
	font-size: 1.6rem;
	line-height: 1.6;
}

hr {
	height: 0; /* 1 */
	color: inherit; /* 2 */
}

abbr[title] {
	text-decoration: underline dotted;
}

b,
strong {
	font-weight: bolder;
}

ul {
	list-style-type: none;
}

code,
kbd,
samp,
pre {
	font-family:
		ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace; /* 1 */
	font-size: 1em; /* 2 */
}

small {
	font-size: 80%;
}

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

table {
	text-indent: 0; /* 1 */
	border-color: inherit; /* 2 */
}

button,
input,
optgroup,
select,
textarea {
	font-family: inherit; /* 1 */
	font-size: 100%; /* 1 */
	line-height: 1.15; /* 1 */
	margin: 0; /* 2 */
}

button,
select {
	text-transform: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
	-webkit-appearance: button;
}

::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

:-moz-focusring {
	outline: 1px dotted ButtonText;
}

:-moz-ui-invalid {
	box-shadow: none;
}

legend {
	padding: 0;
}

progress {
	vertical-align: baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto;
}

[type='search'] {
	-webkit-appearance: textfield; /* 1 */
	outline-offset: -2px; /* 2 */
}

::-webkit-search-decoration {
	-webkit-appearance: none;
}

::-webkit-file-upload-button {
	-webkit-appearance: button; /* 1 */
	font: inherit; /* 2 */
}

summary {
	display: list-item;
}

.mb-1 {
	margin-bottom: .4rem;
}

.mb-2 {
	margin-bottom: .8rem;
}

.mb-3 {
	margin-bottom: 1.2rem;
}

.mb-4 {
	margin-bottom: 1.6rem;
}

.mb-5 {
	margin-bottom: 2rem;
}

.mb-6 {
	margin-bottom: 2.4rem;
}

.mb-7 {
	margin-bottom: 2.8rem;
}

.mb-8 {
	margin-bottom: 3.2rem;
}

.mb-9 {
	margin-bottom: 3.6rem;
}

.mb-10 {
	margin-bottom: 4rem;
}

.mb-16 {
	margin-bottom: 
}

.icon {
	width: 2rem;
	height: 2rem;
	color: var(--color-success);
}

:root {
	--font-family-sriracha: 'Sriracha', cursive;
	
	--color-text: ${LIGHT_COLORS.text};
	--color-background: ${LIGHT_COLORS.background};
	--color-blurred-background: ${LIGHT_COLORS.blurredBackground};
	
	--color-primary-50: ${LIGHT_COLORS.primary[50]};
	--color-primary-100: ${LIGHT_COLORS.primary[100]};
	--color-primary-200: ${LIGHT_COLORS.primary[200]};
	--color-primary-300: ${LIGHT_COLORS.primary[300]};
	--color-primary-400: ${LIGHT_COLORS.primary[400]};
	--color-primary-500: ${LIGHT_COLORS.primary[500]};
	--color-primary-600: ${LIGHT_COLORS.primary[600]};
	--color-primary-700: ${LIGHT_COLORS.primary[700]};
	--color-primary-800: ${LIGHT_COLORS.primary[800]};
	--color-primary-900: ${LIGHT_COLORS.primary[900]};
	--color-secondary-50: ${LIGHT_COLORS.secondary[50]};
	--color-secondary-100: ${LIGHT_COLORS.secondary[100]};
	--color-secondary-200: ${LIGHT_COLORS.secondary[200]};
	--color-secondary-300: ${LIGHT_COLORS.secondary[300]};
	--color-secondary-400: ${LIGHT_COLORS.secondary[400]};
	--color-secondary-500: ${LIGHT_COLORS.secondary[500]};
	--color-secondary-600: ${LIGHT_COLORS.secondary[600]};
	--color-secondary-700: ${LIGHT_COLORS.secondary[700]};
	--color-secondary-800: ${LIGHT_COLORS.secondary[800]};
	--color-secondary-900: ${LIGHT_COLORS.secondary[900]};
	--color-gray-50: ${LIGHT_COLORS.gray[50]};
	--color-gray-100: ${LIGHT_COLORS.gray[100]};
	--color-gray-200: ${LIGHT_COLORS.gray[200]};
	--color-gray-300: ${LIGHT_COLORS.gray[300]};
	--color-gray-400: ${LIGHT_COLORS.gray[400]};
	--color-gray-500: ${LIGHT_COLORS.gray[500]};
	--color-gray-600: ${LIGHT_COLORS.gray[600]};
	--color-gray-700: ${LIGHT_COLORS.gray[700]};
	--color-gray-800: ${LIGHT_COLORS.gray[800]};
	--color-gray-900: ${LIGHT_COLORS.gray[900]};

	--color-decorative: ${LIGHT_COLORS.decorative};
	--color-muted: ${LIGHT_COLORS.muted};
	--color-muted-background: ${LIGHT_COLORS.mutedBackground};
	--color-info: ${LIGHT_COLORS.info};
	--color-success: ${LIGHT_COLORS.success};
	--color-success-background: ${LIGHT_COLORS.successBackground};
	--color-error: ${LIGHT_COLORS.error};
	--color-error-background: ${LIGHT_COLORS.errorBackground};
	--color-alert: ${LIGHT_COLORS.alert};
	--color-alert-background: ${LIGHT_COLORS.alertBackground};

	--color-subtle-background: ${LIGHT_COLORS.subtleBackground};
	--color-subtle-floating: ${LIGHT_COLORS.subtleFloating};
	
	--color-homepage-light: ${LIGHT_COLORS.homepageLight};
	--color-homepage-dark: ${LIGHT_COLORS.homepageDark};
	--color-homepage-bg: ${LIGHT_COLORS.homepageBg};

	--syntax-bg: ${LIGHT_COLORS.syntax.bg};
	--syntax-highlight: ${LIGHT_COLORS.syntax.highlight};
	--syntax-txt: ${LIGHT_COLORS.syntax.txt};
	--syntax-comment: ${LIGHT_COLORS.syntax.comment};
	--syntax-prop: ${LIGHT_COLORS.syntax.prop};
	--syntax-bool: ${LIGHT_COLORS.syntax.bool};
	--syntax-val: ${LIGHT_COLORS.syntax.val};
	--syntax-str: ${LIGHT_COLORS.syntax.str};
	--syntax-name: ${LIGHT_COLORS.syntax.name};
	--syntax-del: ${LIGHT_COLORS.syntax.del};
	--syntax-regex: ${LIGHT_COLORS.syntax.regex};
	--syntax-fn: ${LIGHT_COLORS.syntax.fn};

	--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
	--shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
`;

export default GlobalStyles;
