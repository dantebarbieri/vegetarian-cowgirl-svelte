<script>
	import SocialNav from './SocialNav.svelte';
</script>

<header>
	<a href="/"
		><img class="logo" src="/images/icons/logos/Logo3.png" alt="The Vegetarian Cowgirl" /></a
	>

	<nav class="pages">
		<a href="/">Home</a>
		<a href="/recipes">Recipes</a>
		<a href="/austin-living">Austin Living</a>
		<a href="/art">Art</a>
		<a href="/about">About</a>
	</nav>

	<SocialNav />
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		background-color: white;
		padding: 0 4rem 0.5rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		z-index: 1;

		> * {
			display: inline-block;
		}
	}

	.logo {
		height: 3.75rem;
		padding: 0.375rem 0.5rem 1.25rem;
	}

	.pages {
		width: 40%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		a {
			--hover-orange: #ea9782;
			--anim-time: 0.6s;
			padding: 0.5rem 0;
			text-decoration: none;
			text-transform: uppercase;
			font-size: small;
			border: 0.25rem solid transparent;
			color: black;
			transition: color var(--anim-time) ease, border-bottom-color var(--anim-time) ease,
				transform var(--anim-time) ease;

			&:hover {
				border-bottom-color: var(--hover-orange);
				color: var(--hover-orange);
				transform: translateY(0.05rem);
			}
		}
	}
</style>
