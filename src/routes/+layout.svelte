<script lang="ts">
	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';
</script>

<div id="app">
	<Navbar />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	:global(body) {
		min-width: 325px;
	}

	#app {
		display: flex;
		flex-direction: column;
		min-height: 100vh; /* compatibility */
		min-height: 100svh;
	}

	main {
		flex: 1;
		padding: 1rem;
		margin: 0 6rem;
	}

	@media (max-width: 1000px) {
		main {
			margin: 0 1rem;
		}
	}
</style>
