<script lang="ts">
	let slideIndex = 0;

	export let slides: {
		description: string;
		href: string;
		imgAlt: string;
		imgSrc: string;
		title: string;
	}[];
	export let transition_ms: number;

	const nextSlide = () => {
		slideIndex = (slideIndex + 1) % slides.length;
	};

	const prevSlide = () => {
		slideIndex = (slideIndex - 1 + slides.length) % slides.length;
	};

	let interval: number;

	const resetInterval = () => {
		clearInterval(interval);
		interval = setInterval(nextSlide, transition_ms);
	};

	const stopInterval = () => {
		clearInterval(interval);
	};

	resetInterval();
</script>

<div class="carousel">
	<div class="carousel-container">
		{#each slides as slide, index (index)}
			<article class="carousel-slide" class:carousel-active={index === slideIndex}>
				<img src={slide.imgSrc} alt={slide.imgAlt} />
				<div class="info">
					<div class="text">
						<h2>{@html slide.title}</h2>
						<p>{@html slide.description}</p>
					</div>
					<a href={slide.href}>Read Post</a>
				</div>
			</article>
		{/each}

		<button
			class="prev carousel-controls"
			on:click={() => {
				resetInterval();
				prevSlide();
			}}>&#10094;</button
		>
		<button
			class="next carousel-controls"
			on:click={() => {
				resetInterval();
				nextSlide();
			}}>&#10095;</button
		>
	</div>

	<div class="carousel-dots">
		{#each slides as _, index}
			<button
				class="dot"
				class:active={index === slideIndex}
				on:click={() => {
					stopInterval();
					slideIndex = index;
				}}
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
		height: 30rem;
		position: relative;
		margin: auto;
		background-color: rgb(244, 242, 237);
		overflow: hidden;

		@media (max-width: 1600px) {
			height: fit-content;
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

	/* Hide the images by default */
	.carousel-slide {
		display: flex;
		visibility: hidden;
		max-height: 0;
		opacity: 0;

		transition: max-height 0s 0.5s, visibility 0s 0.5s, opacity 0.5s ease-out;

		img {
			object-fit: cover;
			height: 30rem;
			width: 75%;
		}

		.info {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-around;
			margin: 0 2rem;
		}

		.text {
			display: inherit;
			flex-direction: inherit;
			align-items: inherit;
			justify-content: center;
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

		a {
			background-color: #ea9782;
			border: 1px solid #ea9782;
			color: white;
			font-weight: 100;
			text-transform: uppercase;
			padding: 0.4rem 1rem;
			line-height: 1.75;
			text-decoration: none;

			transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		}

		a:hover {
			background-color: white;
			color: #ea9782;
		}

		@media (max-width: 1600px) {
			img {
				width: 66.7%;
			}
		}

		@media (max-width: 1200px) {
			img {
				width: 55%;
			}
		}

		@media (max-width: 900px) {
			position: static;
			flex-direction: column;

			h2 {
				margin-top: 0;
			}

			.info {
				align-items: center;
				margin: 2rem;
			}

			h2,
			p {
				text-align: center;
			}

			img {
				width: 100%;
			}
		}

		@media (max-width: 600px) {
			img {
				height: 20rem;
			}

			p {
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 4; /* number of lines to show */
				line-clamp: 4;
				-webkit-box-orient: vertical;
			}
		}

		@media (max-width: 400px) {
			img {
				height: 10rem;
			}

			p {
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 2; /* number of lines to show */
				line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
	}

	/* Show the images on an active carousel-slide */
	.carousel-active {
		visibility: visible;
		max-height: fit-content;
		opacity: 1;
		transition: opacity 0.5s ease-in;
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
