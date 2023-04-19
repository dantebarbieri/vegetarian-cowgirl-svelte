<script>
	import { base } from '$app/paths';
	import Header from '../Header.svelte';
</script>

<svelte:head>
	<title>About | The Vegetarian Cowgirl</title>
</svelte:head>

<img src="{base}/images/about/rainbow.jpg" alt="Anjali under a rainbow" />

<article class="center">
	<Header id="meet-anjali" variant="h2">Meet Anjali</Header>

	<p>
		Anjali Segu is an Austin Lifestyle blogger behind The Vegetarian Cowgirl, Austin's top
		vegetarian food and travel blog. The Vegetarian Cowgirl features the top vegetarian and vegan
		restaurants in Austin as well as fun weekend activities.
	</p>

	<p>
		Anjali is a senior at Texas A&M who loves traveling, baking, and cooking in her free time. She
		is passionate about her plant-based lifestyle and wants to share her finds both in Austin and
		around the globe through her travels. What started as a personal tool to share with her family
		and friends has become much more for all to explore.
	</p>
</article>

<article class="center">
	<Header id="about-blog" variant="h2">About the Blog</Header>

	<p>
		Launched in 2021, the Vegetarian Cowgirl is a new up-and-coming lifestyle blog in Austin, TX.
		The blog features Anjali's favorite vegetarian recipes and her must-try bakes. Anjali has
		traveled across the globe and loves to share her top food and activity finds in cities. Check
		out the travel itineraries that she has created. The goal of the blog is to celebrate
		plant-based eating internationally.
	</p>
</article>

<article class="center">
	<h2 id="instagram">Follow On Instagram</h2>
	<a href="https://instagram.com/thevegetariancowgirl/"><h2>@thevegetariancowgirl</h2></a>
</article>

<style lang="scss">
	img {
		width: 100%;
	}

	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	p {
		font-size: larger;
		font-weight: lighter;
		width: 85%;
		color: #000000b3;
	}

	h2 {
		font-weight: 500;
		margin-bottom: 0;
		font-family: Jost, sans-serif;
	}

	a {
		text-decoration: none;
		& > h2 {
			color: #ea9782;
			margin-top: 0;
			margin-bottom: 1.5rem;
		}
	}

	@media (max-width: 1000px) {
		p {
			width: 100%;
		}
	}
</style>
