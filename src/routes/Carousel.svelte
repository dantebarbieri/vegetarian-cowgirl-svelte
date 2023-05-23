<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let slideIndex = 0;

	type Slide = {
		description: string;
		href: string;
		imgAlt: string;
		imgSrc: string;
		title: string;
	};

	export let slides: Slide[];
	export let transition_ms: number;

	const nextSlide = () => {
		slideIndex = (slideIndex + 1) % slides.length;
	};

	const prevSlide = () => {
		slideIndex = (slideIndex - 1 + slides.length) % slides.length;
	};

	let interval: number = 0;

	const resetInterval = () => {
		clearInterval(interval);
		interval = setInterval(nextSlide, transition_ms);
	};

	const stopInterval = () => clearInterval(interval);

	let current_slide: Slide;

	let reducedMotion: MediaQueryList;

	let imgRef: HTMLImageElement;

	const adjustImageFit = () => {
		if (!imgRef) return;

		const imgRatio = imgRef.naturalWidth / imgRef.naturalHeight;
		const containerRatio = imgRef.parentElement?.offsetWidth! / imgRef.parentElement?.offsetHeight!;

		if (imgRatio > containerRatio) {
			imgRef.style.objectFit = 'contain';
			imgRef.style.width = 'auto';
			imgRef.style.height = '100%';
		} else {
			imgRef.style.objectFit = 'cover';
			imgRef.style.width = '100%';
			imgRef.style.height = 'auto';
		}
	};

	onMount(() => {
		reducedMotion = window.matchMedia('(prefers-reduced-motion)');
		reducedMotion.addEventListener('change', () => {
			if (reducedMotion.matches) {
				stopInterval();
			} else {
				resetInterval();
			}
		});
		if (!reducedMotion.matches) {
			resetInterval();
		}
	});

	$: {
		current_slide = slides[slideIndex];
		if (!reducedMotion?.matches) {
			resetInterval();
		}
	}
</script>

<div class="carousel">
	<div class="carousel-container" on:mouseleave={resetInterval} on:mouseenter={stopInterval}>
		{#each slides as slide (slide.imgSrc)}
			{#if slide === current_slide}
				<article class="carousel-slide" transition:fade={{ duration: 500 }}>
					<div class="image-container">
						<img
							bind:this={imgRef}
							on:load={adjustImageFit}
							src={slide.imgSrc}
							alt={slide.imgAlt}
						/>
					</div>
					<div class="text-container">
						<div class="text">
							<h2>{@html slide.title}</h2>
							<p>{@html slide.description}</p>
						</div>
						<nav>
							<a href={slide.href}>Read Post</a>
						</nav>
					</div>
				</article>
			{/if}
		{/each}

		<button class="prev carousel-controls" on:click={prevSlide}>&#10094;</button>
		<button class="next carousel-controls" on:click={nextSlide}>&#10095;</button>
	</div>

	<div class="carousel-dots">
		{#each slides as _, index}
			<button
				class="dot"
				class:active={index === slideIndex}
				on:click={() => {
					slideIndex = index;
					stopInterval();
				}}
			/>
		{/each}
	</div>
</div>

<style lang="scss">
	.carousel {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.carousel-container {
		height: 30rem;
		position: relative;
		margin: auto;
		background-color: rgb(244, 242, 237);
		overflow: hidden;

		@media (min-width: 0px) {
			width: 20rem;
			height: 30rem;
		}

		@media (min-width: 600px) {
			width: 25rem;
			height: 30rem;
		}

		@media (min-width: 900px) {
			width: 37.5rem;
			height: 30rem;
		}

		@media (min-width: 1200px) {
			width: 70rem;
			height: 30rem;
		}
	}

	/* Hide the images by default */
	.carousel-slide {
		height: 100%;
		display: flex;
		flex-direction: row;
	}

	.image-container {
		flex: 1 1 60%;
		overflow: hidden;
		position: relative;
	}

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.text-container {
		flex: 1 1 40%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;
		margin: 0 2rem;
	}

	.text {
		flex: 1 1 60%;
	}

	h2 {
		font-size: 2.125rem;
		font-weight: 900;
		margin-bottom: 0.5rem;
		font-family: 'Jost', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
	}

	p {
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.5;
		width: 65%;
		color: #000000b3;
	}

	nav {
		flex: 1 1 40%;
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

	@media (max-width: 900px) {
		.carousel-slide {
			flex-direction: column;
		}

		h2 {
			margin-top: 0;
		}

		.text-container {
			align-items: center;
			margin: 2rem;
		}

		h2,
		p {
			text-align: center;
		}
	}

	@media (max-width: 600px) {
		p {
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 4; /* number of lines to show */
			line-clamp: 4;
			-webkit-box-orient: vertical;
		}
	}

	@media (max-width: 400px) {
		p {
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 2; /* number of lines to show */
			line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}

	/* Next & previous buttons */
	.carousel-controls {
		cursor: pointer;
		position: absolute;
		top: 50%;
		width: auto;
		margin-top: -1.4rem;
		padding: 1rem;
		color: white;
		font-weight: bold;
		font-size: 1.1rem;
		transition: 0.6s ease;
		border-color: transparent;
		user-select: none;
		background-color: rgba(0, 0, 0, 0.1);
	}

	/* Position the "next button" to the right */
	.prev {
		left: 0;
		border-radius: 0 0.2rem 0.2rem 0;
	}

	.next {
		right: 0;
		border-radius: 0.2rem 0 0 0.2rem;
	}

	/* On hover, add a black background color with a little bit see-through */
	.carousel-controls:hover {
		background-color: rgba(0, 0, 0, 0.8);
	}

	.carousel-dots {
		margin: 0.5rem;
		display: flex;
		gap: 0.4em;

		@media (max-width: 900px) {
			gap: 1.2em;

			.dot {
				height: 1.5em;
			}
		}
	}

	/* The dots/bullets/indicators */
	.dot {
		cursor: pointer;
		height: 0.667em;
		aspect-ratio: 1/1;
		padding: 0;
		background-color: rgba(175, 175, 175, 0.8);
		border-color: transparent;
		display: inline-block;
		clip-path: circle(50% at 50% 50%);
		transition: background-color 0.6s ease, clip-path 0.6s ease;
	}

	.active,
	.dot:hover {
		background-color: rgba(73, 73, 73, 0.8);
	}
</style>
