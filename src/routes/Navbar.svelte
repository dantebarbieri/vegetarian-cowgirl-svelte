<header style="box-shadow: 0 1em 0.2em #33333333;">
	<a href="/"
		><img class="logo" src="/images/icons/logos/Logo3.png" alt="The Vegetarian Cowgirl" /></a
	>

	<nav class="pages">
		<a href="/">Home</a>
		<a href="/recipes">Recipes</a>
		<a href="/austin-living">Austin Living</a>
		<a href="/art">Art</a>
		<a href="/about">About</a>
	</nav>

	<nav class="social">
		<a href="https://instagram.com/thevegetariancowgirl/"
			><img src="/images/icons/instagram.png" alt="Instagram" /></a
		>
		<a href="https://etsy.com/shop/PrintsbyMinimalist"
			><img src="/images/icons/etsy.png" alt="Etsy" /></a
		>
		<a href="https://pinterest.com/PrintsbyMinimalist/"
			><img src="/images/icons/pinterest.png" alt="Pinterest" /></a
		>
	</nav>
</header>

<style lang="scss">
	header {
		position: sticky;
		padding: 0 4rem 0.5rem;
		display: flex;
		justify-content: space-around;
		align-items: center;

		> * {
			display: inline-block;
		}
	}

	.logo {
		height: 3.5rem;
		padding: 0.375rem 0.5rem 1.25rem;
	}

	.pages {
		width: 40%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		a {
			--hover-orange: #ea9782;
			--anim-time: 0.6s;
			padding: 0.5rem;
			text-decoration: none;
			border: 0.25rem solid transparent;
			color: black;
			transition: color var(--anim-time) ease, border-bottom-color var(--anim-time) ease,
				transform var(--anim-time) ease;

			&:hover {
				border-bottom-color: var(--hover-orange);
				color: var(--hover-orange);
				transform: translateY(0.05rem);
			}
		}
	}

	.social {
		a {
			margin: 0 0.15rem;
		}
		img {
			height: 1rem;
		}
	}
</style>
