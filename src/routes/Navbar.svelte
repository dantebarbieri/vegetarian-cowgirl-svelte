<script>
	import { base } from '$app/paths';
	import SocialNav from './SocialNav.svelte';
</script>

<header>
	<a href="{base}/"
		><img class="logo" src="{base}/images/icons/logos/Logo3.png" alt="The Vegetarian Cowgirl" /></a
	>

	<section class="navigation">
		<nav class="pages">
			<a href="{base}/">Home</a>
			<a href="{base}/recipes">Recipes</a>
			<a href="{base}/austin-living">Austin Living</a>
			<a href="{base}/art">Art</a>
			<a href="{base}/about">About</a>
		</nav>

		<SocialNav />
	</section>
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		background-color: white;
		padding: 0 2.25rem 0.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 1;

		> * {
			display: inline-block;
		}
	}

	.navigation {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 5rem;
	}

	.logo {
		height: 3.75rem;
		padding: 0.375rem 0.5rem 1.25rem;
	}

	.pages {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;

		a {
			--hover-orange: #ea9782;
			--anim-time: 0.6s;
			padding: 0.5rem 0;
			text-decoration: none;
			text-transform: uppercase;
			font-size: small;
			border: 0.25rem solid transparent;
			color: black;
			padding: 0.5rem 1rem;
			transition: color var(--anim-time) ease, border-bottom-color var(--anim-time) ease,
				transform var(--anim-time) ease;

			&:hover {
				border-bottom-color: var(--hover-orange);
				color: var(--hover-orange);
				transform: translateY(0.075rem);
			}
		}
	}
</style>
