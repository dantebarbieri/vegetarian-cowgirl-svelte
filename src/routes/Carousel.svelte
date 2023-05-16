<script lang="ts">
	import { base } from '$app/paths';
	import { quintOut } from 'svelte/easing';
	import { each, onMount } from 'svelte/internal';
	import { crossfade } from 'svelte/transition';

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

	let slideIndex = 0;

	export let slides: {
		description: string;
		href: string;
		imgAlt: string;
		imgSrc: string;
		title: string;
	}[] = [
		{
			imgAlt: 'arenal volcano',
			imgSrc: `${base}/images/blog_posts/arenal_volcano.jpg`,
			title: 'Element 1',
			description: 'This is the first element.',
			href: '#'
		},
		{
			imgAlt: 'two cups of ice cream',
			imgSrc: `${base}/images/blog_posts/austin_afternoon.jpg`,
			title: 'Element 2',
			description: 'This is the second element.',
			href: '#'
		},
		{
			imgAlt: 'sparklers spelling love',
			imgSrc: `${base}/images/blog_posts/july_4th.jpg`,
			title: 'Element 3',
			description: 'This is the third element.',
			href: '#'
		},
		{
			imgAlt: 'thanksgiving dinner',
			imgSrc: `${base}/images/blog_posts/thanksgiving.jpg`,
			title: 'Element 4',
			description: 'This is the fourth element.',
			href: '#'
		}
	];
</script>

<div class="carousel">
	<div class="carousel-container">
		{#each slides as slide, index}
			<article class="carousel-slide" class:carousel-active={index === slideIndex}>
				<img src={slide.imgSrc} alt={slide.imgAlt} />
				<div>
					<h2>{slide.title}</h2>
					<p>{slide.description}</p>
					<a href={slide.href}>Read Post</a>
				</div>
			</article>
		{/each}

		<button
			class="prev carousel-controls"
			on:click={() => (slideIndex = (slideIndex - 1 + slides.length) % slides.length)}
			>&#10094;</button
		>
		<button
			class="next carousel-controls"
			on:click={() => (slideIndex = (slideIndex + 1) % slides.length)}>&#10095;</button
		>
	</div>

	<div class="carousel-dots">
		{#each slides as _, index}
			<button
				class="dot"
				class:active={index === slideIndex}
				on:click={() => (slideIndex = index)}
			/>
		{/each}
	</div>
</div>

<style lang="scss">
	* {
		box-sizing: border-box;
	}

	.carousel {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/* Slideshow container */
	.carousel-container {
		// min-height: 30rem;
		// aspect-ratio: 3/2;
		position: relative;
		margin: auto;
	}

	/* Hide the images by default */
	.carousel-slide {
		display: none;

		img {
			object-fit: cover;
		}

		div {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-around;
			margin: 0 2rem;
		}

		h2 {
			font-size: 2.5rem;
			margin-bottom: 0.5rem;
		}

		p {
			font-size: 1.5rem;
			font-weight: lighter;
			line-height: 1.5;
			width: 65%;
			color: #000000b3;
		}

		a {
			background-color: #ea9782;
			color: white;
			font-weight: 100;
			text-transform: uppercase;
			padding: 0.75rem 1rem;
			text-decoration: none;
		}
	}

	/* Show the images on an active carousel-slide */
	.carousel-slide.carousel-active {
		display: flex;
		width: 100%;

		img {
			width: 60%;
		}
	}

	/* Next & previous buttons */
	.carousel-controls {
		cursor: pointer;
		position: absolute;
		top: 50%;
		width: auto;
		margin-top: -22px;
		padding: 16px;
		color: white;
		font-weight: bold;
		font-size: 18px;
		transition: 0.6s ease;
		border-radius: 0 3px 3px 0;
		border-color: transparent;
		user-select: none;
		background-color: rgba(0, 0, 0, 0.1);
	}

	/* Position the "next button" to the right */
	.next {
		right: 0;
		border-radius: 3px 0 0 3px;
	}

	/* On hover, add a black background color with a little bit see-through */
	.carousel-controls:hover {
		background-color: rgba(0, 0, 0, 0.8);
	}

	/* The dots/bullets/indicators */
	.dot {
		cursor: pointer;
		height: 0.667em;
		aspect-ratio: 1/1;
		padding: 0;
		margin: 0 0.2em;
		background-color: rgba(175, 175, 175, 0.8);
		border-radius: 50%;
		border-color: transparent;
		display: inline-block;
		transition: background-color 0.6s ease;
	}

	.active,
	.dot:hover {
		background-color: rgba(73, 73, 73, 0.8);
	}
</style>
