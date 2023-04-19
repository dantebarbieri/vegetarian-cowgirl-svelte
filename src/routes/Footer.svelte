<script>
	import { base } from '$app/paths';
	import SocialNav from './SocialNav.svelte';
</script>

<footer>
	<section class="banner">
		<img
			class="logo"
			src="{base}/images/icons/logos/LogoBlack.png"
			alt="The Vegetarian Cowgirl Logo"
		/>
		<p class="tagline">Austin's top vegetarian food &amp; travel blog</p>
		<SocialNav />
	</section>

	<div class="divider" aria-hidden="true" />

	<section class="travel">
		<a class="category" href="{base}/travel"><h2>Travel</h2></a>
		<a class="page" href="{base}/costa-rica">Costa Rica</a>
		<a class="page" href="{base}/austin">Austin</a>
		<a class="page" href="{base}/hawaii">Hawaii</a>
		<a class="page" href="{base}/indianapolis">Indianapolis</a>
		<a class="page" href="{base}/rome">Rome</a>
		<a class="page" href="{base}/paris">Paris</a>
		<a class="page" href="{base}/switzerland">Switzerland</a>
	</section>

	<section class="recipes">
		<a class="category" href="{base}/recipes"><h2>Recipes</h2></a>
		<a class="page" href="{base}/recipes#baking">Baking</a>
		<a class="page" href="{base}/recipes#cooking">Cooking</a>
		<a class="page" href="{base}/recipes#drinks">Drinks</a>
	</section>

	<section class="austin-living">
		<a class="category" href="{base}/austin-living"><h2>Austin Living</h2></a>
		<a class="page" href="{base}/austin-living#austinactivities">Austin Activities</a>
		<a class="page" href="{base}/austin-living#restaurants">Restaurants</a>
		<a class="page" href="{base}/austin-living#other">Other</a>
	</section>

	<section class="about">
		<a class="category" href="{base}/about"><h2>About</h2></a>
		<a class="page" href="{base}/about">My Story</a>
	</section>
	<p class="copyright">&copy; 2023 Anjali Segu</p>
</footer>

<style lang="scss">
	footer {
		background-color: #f4f2ed;
		padding: 2.5rem 3rem 1.5rem 3rem;
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr 1px repeat(4, 1fr);
		grid-template-areas:
			'banner divider travel recipes austin-living about'
			'copyright copyright copyright copyright copyright copyright';
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	.banner {
		grid-area: banner;

		p {
			text-align: center;
		}
	}

	.divider {
		grid-area: divider;
		border-left: 1px solid currentColor;
		width: 1px;
		height: 100%;
	}

	.travel {
		grid-area: travel;
	}

	.recipes {
		grid-area: recipes;
	}

	.austin-living {
		grid-area: austin-living;
	}

	.about {
		grid-area: about;
	}

	.copyright {
		grid-area: copyright;
		text-align: right;
		width: 100%;
		margin: 0 1rem;
	}

	a {
		text-decoration: none;
	}

	.page {
		line-height: 1.75;
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

	.logo {
		height: 5rem;
	}

	.tagline {
		text-transform: uppercase;
		font-family: Jost, sans-serif;
		font-weight: lighter;
	}

	@media (max-width: 750px) {
		footer {
			grid-template-columns: repeat(2, 1fr);
			grid-template-areas:
				'banner banner'
				'divider divider'
				'travel recipes'
				'austin-living about'
				'copyright copyright';
		}

		.banner {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			gap: 1rem;
		}

		.divider {
			width: 100%;
			height: 1px;
			border-left: none;
			border-top: 1px solid currentColor;
		}

		.copyright {
			text-align: center;
		}
	}
</style>
