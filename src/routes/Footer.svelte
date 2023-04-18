<script>
	import SocialNav from './SocialNav.svelte';
</script>

<footer>
	<div class="row">
		<section class="column">
			<img class="logo" src="/images/icons/logos/LogoBlack.png" alt="The Vegetarian Cowgirl Logo" />
			<p class="tagline">Austin's top vegetarian food &amp; travel blog</p>
			<SocialNav />
		</section>

		<div class="column">
			<a class="category" href="/travel"><h2>Travel</h2></a>
			<a class="page" href="/costa-rica">Costa Rica</a>
			<a class="page" href="/austin">Austin</a>
			<a class="page" href="/hawaii">Hawaii</a>
			<a class="page" href="/indianapolis">Indianapolis</a>
			<a class="page" href="/rome">Rome</a>
			<a class="page" href="/paris">Paris</a>
			<a class="page" href="/switzerland">Switzerland</a>
		</div>

		<div class="column">
			<a class="category" href="/recipes"><h2>Recipes</h2></a>
			<a class="page" href="/recipes#baking">Baking</a>
			<a class="page" href="/recipes#cooking">Cooking</a>
			<a class="page" href="/recipes#drinks">Drinks</a>
		</div>

		<div class="column">
			<a class="category" href="/austin-living"><h2>Austin Living</h2></a>
			<a class="page" href="/austin-living#austinactivities">Austin Activities</a>
			<a class="page" href="/austin-living#restaurants">Restaurants</a>
			<a class="page" href="/austin-living#other">Other</a>
		</div>

		<div class="column">
			<a class="category" href="/about"><h2>About</h2></a>
			<a class="page" href="/about">My Story</a>
		</div>
	</div>
	<p>&copy; 2023 Anjali Segu</p>
</footer>

<style lang="scss">
	footer {
		background-color: #f4f2ed;
		padding: 1rem 3rem 1.5rem 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		p {
			text-align: right;
			width: 100%;
			margin: 0 1rem;
		}
	}

	a {
		text-decoration: none;
	}

	.page {
		line-height: 2;
		font-weight: lighter;
		font-size: smaller;
		color: #000000aa;
	}

	.category {
		text-transform: uppercase;
		color: currentColor;

		& > h2 {
			font-weight: semi-bold;
			font-size: medium;
			margin: 0 0 0.5rem;
		}
	}

	.row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
	}

	.column {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		p {
			text-align: center;
		}

		.row &:nth-child(1) {
			padding-right: 1.5rem;
		}

		.row &:nth-child(2) {
			border-left: 1px solid currentColor;
		}
	}

	.logo {
		height: 5rem;
	}

	.tagline {
		text-transform: uppercase;
		font-family: Jost, sans-serif;
		font-weight: lighter;
	}
</style>
