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

<style lang="scss">
	.social {
		display: inline-flex;
		justify-content: center;
		align-items: center;

		a {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			margin: 0;
			padding: 0.25rem;
			border-radius: 20%;
			background-color: transparent;

			&:hover {
				background-color: #ffffffdd;
			}
		}

		img {
			height: 1rem;

			&:hover {
				transform: scale(1.1);
			}
		}
	}
</style>
