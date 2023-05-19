<script lang="ts">
	import { base } from '$app/paths';
	import Carousel from './Carousel.svelte';
	import Header from './Header.svelte';

	const slides = [
		{
			imgAlt: 'arenal volcano',
			imgSrc: `${base}/images/blog_posts/arenal_volcano.jpg`,
			title: 'Arenal Volcano',
			description: 'A day trip to the Arenal Volcano and Baldi Hot Springs in Costa Rica.',
			href: '#'
		},
		{
			imgAlt: 'thanksgiving dinner',
			imgSrc: `${base}/images/blog_posts/thanksgiving.jpg`,
			title: 'Vegetarian Thanksgiving',
			description:
				'10 vegetarian thanksgiving ideas. Pictures is jalapeno cheddar cornbread and stuffed garlic mushrooms.',
			href: '#'
		},
		{
			imgAlt: 'two cups of ice cream',
			imgSrc: `${base}/images/blog_posts/austin_afternoon.jpg`,
			title: 'An Austin Afternoon',
			description:
				"An exciting austin afternoon idea. Swing by Manoli's Ice Cream and Cafe Monet for a fun Austin afternoon.",
			href: '#'
		},
		{
			imgAlt: 'sparklers spelling love',
			imgSrc: `${base}/images/blog_posts/july_4th.jpg`,
			title: 'July 4<sup>th</sup> Photography',
			description: 'Learn how to get this epic shot on a DSLR camera.',
			href: '#'
		}
	];
</script>

<svelte:head>
	<title>The Vegetarian Cowgirl</title>
</svelte:head>

<Carousel {slides} transition_ms={7_500} />

<section id="featured-posts">
	<Header variant="h2" font_size="2.125rem">Featured Posts</Header>
</section>

<section id="travel-guides">
	<Header variant="h2" font_size="2.125rem">Travel Guides</Header>
</section>

<article id="about">
	<div class="image">
		<img src="{base}/images/about/BioProfile.jpg" alt="Anjali by the Trevi Fountain" />
	</div>
	<div class="text">
		<h3>Welcome to the Vegetarian Cowgirl</h3>
		<p>
			Anjali is the blogger behind A Vegetarian Cowgirl, Austin's top vegetarian food guide. Anjali
			hopes to inspire you taste buds by guiding you through plant based spots in cities. Check out
			her recipes, travel guides and her art.
		</p>
		<a href="{base}/about">About</a>
	</div>
</article>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	article#about {
		display: flex;
		flex-direction: row;
		border: 1px solid #000e;
		background-color: rgb(244, 242, 237);

		div {
			flex: 1;
		}

		.image {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		img {
			margin: 2rem;
			max-height: 25rem;
		}

		.text {
			font-family: Jost, sans-serif;
			color: rgba(0, 0, 0, 0.7);
			margin: 0 2rem;

			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		}

		h3 {
			font-size: 2.125rem;
			font-weight: 500;
			margin: 0 0 0.35em;
		}

		p {
			font-size: 1.25rem;
			font-weight: 500;
			margin: 0 0 0.35em;
		}

		a {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			margin: 0.5rem 0 0;
			text-decoration: none;
			font-family: Karla, sans-serif;
			font-weight: 500;
			font-size: 0.875rem;
			line-height: 1.75;
			text-transform: uppercase;
			min-width: 4rem;
			padding: 0.4rem 1rem;
			transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
				color 0.25s ease-in-out;
			color: rgba(255, 255, 255, 0.97);
			border: 1px solid rgb(255, 168, 122);
			background-color: rgb(240, 155, 133);

			&:hover {
				background-color: rgb(255, 255, 255);
				color: rgba(240, 155, 133);
			}
		}

		@media (min-width: 0px) {
			min-width: 20rem;
			min-height: 20rem;
		}

		@media (min-width: 600px) {
			min-width: 25rem;
			min-height: 20rem;
		}

		@media (min-width: 900px) {
			min-width: 37.5rem;
			min-height: 20rem;
		}

		@media (min-width: 1200px) {
			min-width: 70rem;
			min-height: 20rem;
		}
	}
</style>
