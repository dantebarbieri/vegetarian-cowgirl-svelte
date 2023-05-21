<script lang="ts">
	export let variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	export let underline_width: string = '3rem';
	export let underline_thickness: string = '0.22rem';
	export let underline_gap: string = '0.75rem';
	export let font_size: string = 'revert';
</script>

{#if variant === 'h1'}
	<h1
		style="font-size: {font_size}; --underline-width: {underline_width}; --underline-thickness: {underline_thickness}; --underline-gap: {underline_gap};"
		{...$$props}
	>
		<slot />
	</h1>
{:else if variant === 'h2'}
	<h2
		style="font-size: {font_size}; --underline-width: {underline_width}; --underline-thickness: {underline_thickness}; --underline-gap: {underline_gap};"
		{...$$props}
	>
		<slot />
	</h2>
{:else if variant === 'h3'}
	<h3
		style="font-size: {font_size}; --underline-width: {underline_width}; --underline-thickness: {underline_thickness}; --underline-gap: {underline_gap};"
		{...$$props}
	>
		<slot />
	</h3>
{:else if variant === 'h4'}
	<h4
		style="font-size: {font_size}; --underline-width: {underline_width}; --underline-thickness: {underline_thickness}; --underline-gap: {underline_gap};"
		{...$$props}
	>
		<slot />
	</h4>
{:else if variant === 'h5'}
	<h5
		style="font-size: {font_size}; --underline-width: {underline_width}; --underline-thickness: {underline_thickness}; --underline-gap: {underline_gap};"
		{...$$props}
	>
		<slot />
	</h5>
{:else if variant === 'h6'}
	<h6
		style="font-size: {font_size}; --underline-width: {underline_width}; --underline-thickness: {underline_thickness}; --underline-gap: {underline_gap};"
		{...$$props}
	>
		<slot />
	</h6>
{/if}

<style>
	* {
		font-family: Jost, sans-serif;
		font-weight: 400;
		position: relative;
		width: fit-content;
		padding-bottom: var(--underline-gap);
	}

	::after {
		content: '';
		position: absolute;
		bottom: calc(-1 * var(--underline-thickness));
		left: calc(50% - var(--underline-width) / 2);
		width: var(--underline-width);
		height: var(--underline-thickness);
		background-color: currentColor;
	}
</style>
