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
	#app {
		display: flex;
		flex-direction: column;
		min-height: 100vh; /* compatibility */
		min-height: 100svh;
	}

	main {
		flex: 1;
		padding: 1rem;
	}
</style>
