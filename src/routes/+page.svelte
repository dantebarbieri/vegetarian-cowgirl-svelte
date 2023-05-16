<script lang="ts">
	import { base } from '$app/paths';
	import Carousel from './Carousel.svelte';

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

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Carousel {slides} transition_ms={7_500} />
